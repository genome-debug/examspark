// backend/src/index.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { startScheduler } = require("./services/scheduler");

// ── Validate required env vars ────────────────────────────────────────────────
const required = ["VAPID_PUBLIC_KEY", "VAPID_PRIVATE_KEY", "VAPID_EMAIL"];
const missing = required.filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error(`\n❌ Missing environment variables: ${missing.join(", ")}`);
  console.error("   Run: npm run generate-vapid  then copy keys into .env\n");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 4000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// ── Request Logger (dev) ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api", routes);

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ error: "Not found" }));

// ── Error handler ─────────────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("[Error]", err);
  res.status(500).json({ error: "Internal server error" });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 ExamSpark Backend running on port ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Exams:  http://localhost:${PORT}/api/exams\n`);
  startScheduler();
});
