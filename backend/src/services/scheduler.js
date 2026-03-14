// backend/src/services/scheduler.js
const cron = require("node-cron");
const { sendDailySparkToAll, sendWeeklyReport } = require("./pushService");

let schedulerStarted = false;

function startScheduler() {
  if (schedulerStarted) return;
  schedulerStarted = true;

  // 8:00 AM IST  = 2:30 AM UTC
  cron.schedule("30 2 * * *", async () => {
    console.log("[Scheduler] 8:00 AM IST spark firing...");
    try {
      await sendDailySparkToAll("morning");
      await new Promise(resolve => setTimeout(resolve, 5000));
      await sendDailySparkToAll("morning");
    } catch (err) { console.error("[Scheduler] 8AM error:", err); }
  });

  // 1:00 PM IST  = 7:30 AM UTC
  cron.schedule("30 7 * * *", async () => {
    console.log("[Scheduler] 1:00 PM IST spark firing...");
    try {
      await sendDailySparkToAll("afternoon");
      await new Promise(resolve => setTimeout(resolve, 5000));
      await sendDailySparkToAll("afternoon");
    } catch (err) { console.error("[Scheduler] 1PM error:", err); }
  });

  // 8:00 PM IST  = 2:30 PM UTC
  cron.schedule("30 14 * * *", async () => {
    console.log("[Scheduler] 8:00 PM IST spark firing...");
    try {
      await sendDailySparkToAll("evening");
      await new Promise(resolve => setTimeout(resolve, 5000));
      await sendDailySparkToAll("evening");
    } catch (err) { console.error("[Scheduler] 8PM error:", err); }
  });

  // Weekly report - Sunday 9:00 AM IST = 3:30 AM UTC
  cron.schedule("30 3 * * 0", async () => {
    console.log("[Scheduler] Sunday weekly report firing...");
    try { await sendWeeklyReport(); }
    catch (err) { console.error("[Scheduler] Weekly report error:", err); }
  });

  console.log("[Scheduler] Schedule started");
  console.log("  · 8:00 AM IST  -> 2 morning sparks");
  console.log("  · 1:00 PM IST  -> 2 afternoon sparks");
  console.log("  · 8:00 PM IST  -> 2 evening sparks");
  console.log("  · Sunday 9AM IST -> weekly report");
}

module.exports = { startScheduler };
