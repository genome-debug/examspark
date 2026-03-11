// backend/src/services/scheduler.js
// Sends sparks at 3 fixed times daily: 8AM, 1PM, 7PM IST

const cron = require("node-cron");
const { sendDailySparkToAll, sendDistractBurst } = require("./pushService");

let schedulerStarted = false;

function startScheduler() {
  if (schedulerStarted) return;
  schedulerStarted = true;

  // ── 3 Fixed Daily Spark Times (IST = UTC+5:30) ───────────────────────────
  // 8:00 AM IST  = 2:30 AM UTC  → cron: "30 2 * * *"
  // 1:00 PM IST  = 7:30 AM UTC  → cron: "30 7 * * *"
  // 7:00 PM IST  = 1:30 PM UTC  → cron: "30 13 * * *"

  cron.schedule("30 2 * * *", async () => {
    console.log("[Scheduler] ⚡ 8:00 AM IST spark firing...");
    try {
      await sendDailySparkToAll("morning");
    } catch (err) {
      console.error("[Scheduler] 8AM spark error:", err);
    }
  });

  cron.schedule("30 7 * * *", async () => {
    console.log("[Scheduler] ⚡ 1:00 PM IST spark firing...");
    try {
      await sendDailySparkToAll("afternoon");
    } catch (err) {
      console.error("[Scheduler] 1PM spark error:", err);
    }
  });

  cron.schedule("30 13 * * *", async () => {
    console.log("[Scheduler] ⚡ 7:00 PM IST spark firing...");
    try {
      await sendDailySparkToAll("evening");
    } catch (err) {
      console.error("[Scheduler] 7PM spark error:", err);
    }
  });

  // ── Distract-Mode Burst ───────────────────────────────────────────────────
  // Still fires every 30 seconds for subscribers who enabled Distraction Radar
  cron.schedule("*/30 * * * * *", async () => {
    try {
      await sendDistractBurst();
    } catch (err) {
      console.error("[Scheduler] sendDistractBurst error:", err);
    }
  });

  console.log("[Scheduler] ✅ Daily spark schedule started");
  console.log("  · 8:00 AM IST  → morning spark");
  console.log("  · 1:00 PM IST  → afternoon spark");
  console.log("  · 7:00 PM IST  → evening spark");
  console.log("  · Distract bursts → every 30 seconds");
}

module.exports = { startScheduler };