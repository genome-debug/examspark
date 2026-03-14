// backend/src/services/pushService.js
const admin = require("firebase-admin");
const store = require("../store/subscribers");
const { getRandomFact } = require("../data/facts");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
}

const SLOT_LABELS = {
  morning:   "Morning Spark",
  afternoon: "Afternoon Spark",
  evening:   "Evening Spark",
};

function buildPayload(subscriber, { forced = false, slot = null } = {}) {
  const fact = getRandomFact(subscriber.exam, subscriber.subjects);
  if (!fact) return null;

  const slotLabel = slot ? SLOT_LABELS[slot] : `ExamSpark - ${fact.subject}`;

  return {
    title: forced ? "Hey! Stop Scrolling - Study Time!" : slotLabel,
    body: fact.fact,
    data: {
      exam: fact.exam,
      subject: fact.subject,
      topic: fact.topic,
      unit: fact.unit || "",
      chapter: fact.chapter || "",
      icon: fact.icon || "",
      forced: forced ? "true" : "false",
      slot: slot || "manual",
    },
  };
}

async function sendToSubscriber(subscriber, options = {}) {
  const payload = buildPayload(subscriber, options);
  if (!payload) {
    console.warn(`[Push] No facts available for ${subscriber.exam}`);
    return;
  }

  const fcmToken = subscriber.subscription.endpoint;
  if (fcmToken.startsWith("device_")) {
    console.warn(`[Push] Skipping non-FCM token for ${subscriber.id}`);
    return;
  }

  try {
    // Data-only message — Notifee on the app handles display
    await admin.messaging().send({
      token: fcmToken,
      data: {
        title: payload.title,
        body: payload.body,
        ...payload.data,
      },
      android: { priority: options.forced ? "high" : "high" },
    });

    await store.markNotified(subscriber.id);
    console.log(`[Push] Sent "${payload.data.topic}" -> ${subscriber.id} [${payload.data.slot}]`);
  } catch (err) {
    if (
      err.code === "messaging/invalid-registration-token" ||
      err.code === "messaging/registration-token-not-registered"
    ) {
      console.log(`[Push] Removing expired token for ${subscriber.id}`);
      await store.removeByEndpoint(fcmToken);
    } else {
      console.error(`[Push] Failed to send to ${subscriber.id}:`, err.message);
    }
  }
}

async function sendDailySparkToAll(slot = "morning") {
  const all = await store.getAll();
  if (all.length === 0) {
    console.log(`[Cron] No subscribers for ${slot} spark`);
    return;
  }
  console.log(`[Cron] ${slot} spark -> sending to ${all.length} subscriber(s)...`);
  await Promise.allSettled(all.map((sub) => sendToSubscriber(sub, { slot })));
  console.log(`[Cron] ${slot} spark done`);
}

async function sendDistractBurst() {
  const subs = await store.getDistractMode();
  if (subs.length === 0) return;
  console.log(`[Cron] Distract burst -> ${subs.length} subscriber(s)`);
  await Promise.allSettled(subs.map((sub) => sendToSubscriber(sub, { forced: true })));
}

async function sendImmediateSpark(subscriberId) {
  const all = await store.getAll();
  const sub = all.find((s) => s.id === subscriberId);
  if (!sub) throw new Error(`Subscriber ${subscriberId} not found`);
  await sendToSubscriber(sub, { slot: "manual" });
  return { ok: true };
}

/**
 * Send weekly report every Sunday 9AM IST
 * Motivational message based on exam + a nudge to open the app
 */
async function sendWeeklyReport() {
  const all = await store.getAll();
  if (all.length === 0) {
    console.log("[Cron] No subscribers for weekly report");
    return;
  }

  console.log(`[Cron] Weekly report -> sending to ${all.length} subscriber(s)...`);

  const MESSAGES = [
    "Every spark you read this week is a fact your competitors skipped. Open the app to see your knowledge map.",
    "Most aspirants give up in the first 3 months. You are still here — that already puts you ahead. Check your streak inside.",
    "Small facts, read consistently, become an unfair advantage on exam day. See how far you have come.",
    "One week closer. One week stronger. Open ExamSpark to see your progress report.",
    "Your exam does not care how you feel on hard days. But the work you do on those days decides the result. Keep your streak alive.",
  ];

  await Promise.allSettled(all.map(async (sub) => {
    const fcmToken = sub.subscription.endpoint;
    if (fcmToken.startsWith("device_")) return;

    const body = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    try {
      await admin.messaging().send({
        token: fcmToken,
        data: {
          title: "Your Weekly Spark Report",
          body,
          slot: "weekly_report",
          forced: "false",
          topic: "Weekly Report",
          subject: "Motivation",
          exam: sub.exam || "",
          unit: "",
          chapter: "",
          icon: "",
        },
        android: { priority: "normal" },
      });
      console.log(`[Push] Weekly report sent -> ${sub.id}`);
    } catch (err) {
      if (
        err.code === "messaging/invalid-registration-token" ||
        err.code === "messaging/registration-token-not-registered"
      ) {
        await store.removeByEndpoint(fcmToken);
      } else {
        console.error(`[Push] Weekly report failed for ${sub.id}:`, err.message);
      }
    }
  }));

  console.log("[Cron] Weekly report done");
}

module.exports = {
  sendDailySparkToAll,
  sendDueNotifications: sendDailySparkToAll,
  sendDistractBurst,
  sendImmediateSpark,
  sendToSubscriber,
  sendWeeklyReport,
};
