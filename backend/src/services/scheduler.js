// backend/src/services/scheduler.js
// node-cron jobs that drive all scheduled push notifications.

const cron = require("node-cron");
const { sendDueNotifications, sendDistractBurst } = require("./pushService");

let schedulerStarted = false;

function startScheduler() {
  if (schedulerStarted) return;
  schedulerStarted = true;

  // ── Regular Spark Notifications ──────────────────────────────────────────
  // Run every minute; pushService.sendDueNotifications filters who is "due"
  // based on each subscriber's chosen intervalMinutes.
  cron.schedule("* * * * *", async () => {
    try {
      await sendDueNotifications();
    } catch (err) {
      console.error("[Scheduler] sendDueNotifications error:", err);
    }
  });

  // ── Distract-Mode Burst ───────────────────────────────────────────────────
  // Fires every 30 seconds for subscribers who enabled Distraction Radar.
  cron.schedule("*/30 * * * * *", async () => {
    try {
      await sendDistractBurst();
    } catch (err) {
      console.error("[Scheduler] sendDistractBurst error:", err);
    }
  });

  console.log("[Scheduler] ✅ Cron jobs started");
  console.log("  · Regular sparks  → checked every 1 minute");
  console.log("  · Distract bursts → every 30 seconds");
}

module.exports = { startScheduler };
