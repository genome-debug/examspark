// backend/src/routes/index.js

const router = require("express").Router();
const store = require("../store/subscribers");
const { sendImmediateSpark, sendToSubscriber } = require("../services/pushService");
const { EXAM_DATA } = require("../data/facts");

// ── Health Check ─────────────────────────────────────────────────────────────
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    subscribers: store.count(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ── Get VAPID Public Key (needed by client to subscribe) ─────────────────────
router.get("/vapid-public-key", (req, res) => {
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY });
});

// ── Get Available Exams & Syllabus ───────────────────────────────────────────
router.get("/exams", (req, res) => {
  const exams = Object.entries(EXAM_DATA).map(([name, data]) => ({
    name,
    emoji: data.emoji,
    subjects: Object.entries(data.subjects).map(([subName, sub]) => ({
      name: subName,
      icon: sub.icon,
      factCount: sub.facts.length,
      topics: [...new Set(sub.facts.map((f) => f.topic))],
    })),
  }));
  res.json({ exams });
});

// ── Subscribe ─────────────────────────────────────────────────────────────────
// Body: { subscription, exam, subjects, intervalMinutes, distractMode }
router.post("/subscribe", async (req, res) => {
  const { subscription, exam, subjects, intervalMinutes, distractMode } = req.body;

  if (!subscription?.endpoint) {
    return res.status(400).json({ error: "Missing push subscription object" });
  }
  if (!exam || !EXAM_DATA[exam]) {
    return res.status(400).json({ error: `Unknown exam: ${exam}` });
  }
  if (!Array.isArray(subjects) || subjects.length === 0) {
    return res.status(400).json({ error: "subjects must be a non-empty array" });
  }

  const record = store.upsert(subscription, {
    exam,
    subjects,
    intervalMinutes: Math.max(1, Math.min(intervalMinutes || 30, 1440)),
    distractMode: !!distractMode,
  });

  // Send a welcome spark immediately
  try {
    await sendToSubscriber(record);
  } catch (_) {
    // Non-fatal — subscription is still saved
  }

  res.status(201).json({
    ok: true,
    subscriberId: record.id,
    message: "Subscribed! Your first spark is on its way 🚀",
  });
});

// ── Update Preferences ────────────────────────────────────────────────────────
// Body: { endpoint, intervalMinutes?, distractMode?, subjects? }
router.patch("/subscribe", (req, res) => {
  const { endpoint, intervalMinutes, distractMode, subjects } = req.body;
  if (!endpoint) return res.status(400).json({ error: "endpoint required" });

  const sub = store.getAll().find((s) => s.subscription.endpoint === endpoint);
  if (!sub) return res.status(404).json({ error: "Subscription not found" });

  if (intervalMinutes !== undefined)
    sub.intervalMinutes = Math.max(1, Math.min(intervalMinutes, 1440));
  if (distractMode !== undefined) sub.distractMode = !!distractMode;
  if (Array.isArray(subjects) && subjects.length > 0) sub.subjects = subjects;

  res.json({ ok: true, subscriber: { id: sub.id, intervalMinutes: sub.intervalMinutes, distractMode: sub.distractMode, subjects: sub.subjects } });
});

// ── Unsubscribe ───────────────────────────────────────────────────────────────
// Body: { endpoint }
router.delete("/subscribe", (req, res) => {
  const { endpoint } = req.body;
  if (!endpoint) return res.status(400).json({ error: "endpoint required" });

  const removed = store.removeByEndpoint(endpoint);
  res.json({ ok: removed, message: removed ? "Unsubscribed" : "Not found" });
});

// ── Manual Spark (user taps "Spark Me Now") ───────────────────────────────────
// Body: { subscriberId }
router.post("/spark", async (req, res) => {
  const { subscriberId } = req.body;
  if (!subscriberId) return res.status(400).json({ error: "subscriberId required" });

  try {
    await sendImmediateSpark(subscriberId);
    res.json({ ok: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
