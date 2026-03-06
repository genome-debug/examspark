// backend/src/services/pushService.js
// Wraps web-push to send notifications.

const webpush = require("web-push");
const store = require("../store/subscribers");
const { getRandomFact } = require("../data/facts");

// Configure VAPID once at startup
webpush.setVapidDetails(
  process.env.VAPID_EMAIL,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

/**
 * Build the notification payload for a subscriber
 */
function buildPayload(subscriber, { forced = false } = {}) {
  const fact = getRandomFact(subscriber.exam, subscriber.subjects);
  if (!fact) return null;

  return {
    title: forced
      ? "🚨 Hey! Stop Scrolling — Study Time!"
      : `${fact.icon} ExamSpark · ${fact.subject}`,
    body: fact.fact,
    data: {
      exam: fact.exam,
      subject: fact.subject,
      topic: fact.topic,
      unit: fact.unit,
      chapter: fact.chapter,
      forced,
      url: "/dashboard",
    },
    badge: "/icons/badge.png",
    icon: "/icons/icon-192.png",
    vibrate: forced ? [200, 100, 200, 100, 200] : [100, 50, 100],
    tag: forced ? "distract-mode" : `spark-${Date.now()}`,
    renotify: forced,
    requireInteraction: forced,
  };
}

/**
 * Send a single push notification to a subscriber
 */
async function sendToSubscriber(subscriber, options = {}) {
  const payload = buildPayload(subscriber, options);
  if (!payload) {
    console.warn(`[Push] No facts available for ${subscriber.exam}`);
    return;
  }

  try {
    await webpush.sendNotification(
      subscriber.subscription,
      JSON.stringify(payload)
    );
    store.markNotified(subscriber.id);
    console.log(`[Push] ✅ Sent "${payload.data.topic}" → ${subscriber.id}`);
  } catch (err) {
    if (err.statusCode === 404 || err.statusCode === 410) {
      // Subscription expired/unsubscribed — clean up
      console.log(`[Push] 🗑️  Removing expired subscription ${subscriber.id}`);
      store.removeByEndpoint(subscriber.subscription.endpoint);
    } else {
      console.error(`[Push] ❌ Failed to send to ${subscriber.id}:`, err.message);
    }
  }
}

/**
 * Send to all subscribers who are due (called by cron)
 */
async function sendDueNotifications() {
  const due = store.getDue();
  if (due.length === 0) return;

  console.log(`[Cron] Sending to ${due.length} due subscriber(s)...`);
  await Promise.allSettled(due.map((sub) => sendToSubscriber(sub)));
}

/**
 * Send distract-mode burst to all subscribers with it enabled
 */
async function sendDistractBurst() {
  const subs = store.getDistractMode();
  if (subs.length === 0) return;

  console.log(`[Cron] 🚨 Distract burst → ${subs.length} subscriber(s)`);
  await Promise.allSettled(
    subs.map((sub) => sendToSubscriber(sub, { forced: true }))
  );
}

/**
 * Send an immediate spark to a specific subscriber (manual trigger)
 */
async function sendImmediateSpark(subscriberId) {
  const sub = store.getAll().find((s) => s.id === subscriberId);
  if (!sub) throw new Error(`Subscriber ${subscriberId} not found`);
  await sendToSubscriber(sub);
  return { ok: true };
}

module.exports = {
  sendDueNotifications,
  sendDistractBurst,
  sendImmediateSpark,
  sendToSubscriber,
};
