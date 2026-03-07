// backend/src/services/pushService.js
// Uses Firebase Admin SDK to send real FCM push notifications to Android devices.

const admin = require("firebase-admin");
const store = require("../store/subscribers");
const { getRandomFact } = require("../data/facts");

// Initialize Firebase Admin SDK once at startup
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require("../firebase-service-account.json")),
  });
}

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
      forced: forced ? "true" : "false",
    },
  };
}

/**
 * Send a single FCM push notification to a subscriber
 */
async function sendToSubscriber(subscriber, options = {}) {
  const payload = buildPayload(subscriber, options);
  if (!payload) {
    console.warn(`[Push] No facts available for ${subscriber.exam}`);
    return;
  }

  const fcmToken = subscriber.subscription.endpoint;

  // Skip invalid tokens (device IDs from old fallback)
  if (fcmToken.startsWith("device_")) {
    console.warn(`[Push] Skipping non-FCM token for ${subscriber.id}`);
    return;
  }

  try {
    await admin.messaging().send({
      token: fcmToken,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: payload.data,
      android: {
        priority: options.forced ? "high" : "normal",
        notification: {
          channelId: options.forced ? "examspark-distract" : "examspark-spark",
          color: options.forced ? "#FF4D6D" : "#FF6B35",
          clickAction: "FLUTTER_NOTIFICATION_CLICK",
        },
      },
    });

    await store.markNotified(subscriber.id);
    console.log(`[Push] ✅ Sent "${payload.data.topic}" → ${subscriber.id}`);
  } catch (err) {
    if (
      err.code === "messaging/invalid-registration-token" ||
      err.code === "messaging/registration-token-not-registered"
    ) {
      console.log(`[Push] 🗑️  Removing expired token for ${subscriber.id}`);
      await store.removeByEndpoint(fcmToken);
    } else {
      console.error(`[Push] ❌ Failed to send to ${subscriber.id}:`, err.message);
    }
  }
}

/**
 * Send to all subscribers who are due (called by cron)
 */
async function sendDueNotifications() {
  const due = await store.getDue();
  if (due.length === 0) return;

  console.log(`[Cron] Sending to ${due.length} due subscriber(s)...`);
  await Promise.allSettled(due.map((sub) => sendToSubscriber(sub)));
}

/**
 * Send distract-mode burst to all subscribers with it enabled
 */
async function sendDistractBurst() {
  const subs = await store.getDistractMode();
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
  const all = await store.getAll();
  const sub = all.find((s) => s.id === subscriberId);
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
