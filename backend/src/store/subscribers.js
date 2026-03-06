// backend/src/store/subscribers.js
// PostgreSQL store for push subscriptions.

const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Create table if it doesn't exist
async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id TEXT PRIMARY KEY,
      subscription JSONB NOT NULL,
      exam TEXT NOT NULL,
      subjects TEXT[] NOT NULL,
      interval_minutes INTEGER DEFAULT 30,
      distract_mode BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT NOW(),
      last_notified_at TIMESTAMP
    )
  `);
  console.log("[Store] PostgreSQL table ready");
}

init().catch(console.error);

const store = {
  async upsert(subscription, { exam, subjects, intervalMinutes, distractMode }) {
    const endpoint = subscription.endpoint;

    // Check if exists
    const existing = await pool.query(
      "SELECT id FROM subscribers WHERE subscription->>'endpoint' = $1",
      [endpoint]
    );

    const id = existing.rows[0]?.id || uuidv4();

    await pool.query(
      `INSERT INTO subscribers (id, subscription, exam, subjects, interval_minutes, distract_mode, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       ON CONFLICT (id) DO UPDATE SET
         subscription = $2, exam = $3, subjects = $4,
         interval_minutes = $5, distract_mode = $6`,
      [id, JSON.stringify(subscription), exam, subjects, intervalMinutes || 30, !!distractMode]
    );

    console.log(`[Store] Upserted subscriber ${id} — ${exam}`);
    const row = await pool.query("SELECT * FROM subscribers WHERE id = $1", [id]);
    return formatRow(row.rows[0]);
  },

  async removeByEndpoint(endpoint) {
    const result = await pool.query(
      "DELETE FROM subscribers WHERE subscription->>'endpoint' = $1",
      [endpoint]
    );
    return result.rowCount > 0;
  },

  async getDue() {
    const result = await pool.query(`
      SELECT * FROM subscribers
      WHERE last_notified_at IS NULL
         OR EXTRACT(EPOCH FROM (NOW() - last_notified_at)) / 60 >= interval_minutes
    `);
    return result.rows.map(formatRow);
  },

  async getDistractMode() {
    const result = await pool.query(
      "SELECT * FROM subscribers WHERE distract_mode = TRUE"
    );
    return result.rows.map(formatRow);
  },

  async markNotified(id) {
    await pool.query(
      "UPDATE subscribers SET last_notified_at = NOW() WHERE id = $1",
      [id]
    );
  },

  async getAll() {
    const result = await pool.query("SELECT * FROM subscribers");
    return result.rows.map(formatRow);
  },

  async count() {
    const result = await pool.query("SELECT COUNT(*) FROM subscribers");
    return parseInt(result.rows[0].count);
  },
};

function formatRow(row) {
  return {
    id: row.id,
    subscription: row.subscription,
    exam: row.exam,
    subjects: row.subjects,
    intervalMinutes: row.interval_minutes,
    distractMode: row.distract_mode,
    createdAt: row.created_at,
    lastNotifiedAt: row.last_notified_at,
  };
}

module.exports = store;
