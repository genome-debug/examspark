// backend/src/routes/index.js

const router = require("express").Router();
const store = require("../store/subscribers");
const { sendImmediateSpark, sendToSubscriber, sendDailySparkToAll, sendWeeklyReport } = require("../services/pushService");
const { EXAM_DATA, getRandomFact } = require("../data/facts");

// -- Health Check
router.get("/health", async (req, res) => {
  res.json({
    status: "ok",
    subscribers: await store.count(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// -- Get VAPID Public Key
router.get("/vapid-public-key", (req, res) => {
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY });
});

// -- Get Available Exams & Syllabus
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

// -- Subscribe
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

  const record = await store.upsert(subscription, {
    exam,
    subjects,
    intervalMinutes: Math.max(1, Math.min(intervalMinutes || 30, 1440)),
    distractMode: !!distractMode,
  });

  try {
    await sendToSubscriber(record);
  } catch (_) {}

  res.status(201).json({
    ok: true,
    subscriberId: record.id,
    message: "Subscribed! Your first spark is on its way",
  });
});

// -- Update Preferences
router.patch("/subscribe", async (req, res) => {
  const { endpoint, intervalMinutes, distractMode, subjects } = req.body;
  if (!endpoint) return res.status(400).json({ error: "endpoint required" });

  const all = await store.getAll();
  const sub = all.find((s) => s.subscription.endpoint === endpoint);
  if (!sub) return res.status(404).json({ error: "Subscription not found" });

  await store.upsert(sub.subscription, {
    exam: sub.exam,
    subjects: Array.isArray(subjects) && subjects.length > 0 ? subjects : sub.subjects,
    intervalMinutes: intervalMinutes !== undefined ? Math.max(1, Math.min(intervalMinutes, 1440)) : sub.intervalMinutes,
    distractMode: distractMode !== undefined ? !!distractMode : sub.distractMode,
  });

  res.json({ ok: true });
});

// -- Unsubscribe
router.delete("/subscribe", (req, res) => {
  const { endpoint } = req.body;
  if (!endpoint) return res.status(400).json({ error: "endpoint required" });
  const removed = store.removeByEndpoint(endpoint);
  res.json({ ok: removed, message: removed ? "Unsubscribed" : "Not found" });
});

// -- Manual Spark
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

// -- Get random fact
router.get("/fact", (req, res) => {
  const { exam, subjects } = req.query;
  const subjectList = subjects ? subjects.split(",") : [];
  const fact = getRandomFact(exam, subjectList);
  if (!fact) return res.status(404).json({ error: "No facts found" });
  res.json(fact);
});

// -- Debug: list subscribers
router.get("/debug/subscribers", async (req, res) => {
  const all = await store.getAll();
  res.json(all.map(s => ({
    id: s.id,
    exam: s.exam,
    endpoint: s.subscription.endpoint.substring(0, 20) + "...",
    intervalMinutes: s.intervalMinutes,
    lastNotifiedAt: s.lastNotifiedAt,
  })));
});

// -- Debug: trigger spark immediately
router.post("/debug/trigger-spark", async (req, res) => {
  try {
    await sendDailySparkToAll("morning");
    await new Promise(resolve => setTimeout(resolve, 5000));
    await sendDailySparkToAll("morning");
    res.json({ ok: true, message: "2 sparks triggered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -- Debug: trigger weekly report immediately
router.post("/debug/trigger-weekly-report", async (req, res) => {
  try {
    await sendWeeklyReport();
    res.json({ ok: true, message: "Weekly report sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
