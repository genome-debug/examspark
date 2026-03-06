// backend/src/store/subscribers.js
// In-memory store for push subscriptions.
// 🔁 Production: Replace with PostgreSQL / MongoDB.

const { v4: uuidv4 } = require("uuid");

/** @type {Map<string, Subscriber>} */
const subscribers = new Map();

/**
 * @typedef {Object} Subscriber
 * @property {string} id
 * @property {object} subscription  — Web Push subscription object from client
 * @property {string} exam
 * @property {string[]} subjects
 * @property {number} intervalMinutes
 * @property {boolean} distractMode
 * @property {Date} createdAt
 * @property {Date} lastNotifiedAt
 */

const store = {
  /**
   * Add or update a subscriber
   */
  upsert(subscription, { exam, subjects, intervalMinutes, distractMode }) {
    // Use endpoint as stable unique key
    const existing = [...subscribers.values()].find(
      (s) => s.subscription.endpoint === subscription.endpoint
    );

    const id = existing?.id || uuidv4();
    const record = {
      id,
      subscription,
      exam,
      subjects,
      intervalMinutes: intervalMinutes || 30,
      distractMode: !!distractMode,
      createdAt: existing?.createdAt || new Date(),
      lastNotifiedAt: existing?.lastNotifiedAt || null,
    };

    subscribers.set(id, record);
    console.log(`[Store] Upserted subscriber ${id} — ${exam} (${subjects.join(", ")})`);
    return record;
  },

  /**
   * Remove a subscriber by endpoint
   */
  removeByEndpoint(endpoint) {
    for (const [id, sub] of subscribers) {
      if (sub.subscription.endpoint === endpoint) {
        subscribers.delete(id);
        console.log(`[Store] Removed subscriber ${id}`);
        return true;
      }
    }
    return false;
  },

  /**
   * Get all subscribers due for a notification
   */
  getDue() {
    const now = new Date();
    return [...subscribers.values()].filter((sub) => {
      if (!sub.lastNotifiedAt) return true;
      const elapsed = (now - sub.lastNotifiedAt) / 1000 / 60; // minutes
      return elapsed >= sub.intervalMinutes;
    });
  },

  /**
   * Get all subscribers with distract mode on
   */
  getDistractMode() {
    return [...subscribers.values()].filter((s) => s.distractMode);
  },

  /**
   * Mark a subscriber as notified now
   */
  markNotified(id) {
    const sub = subscribers.get(id);
    if (sub) sub.lastNotifiedAt = new Date();
  },

  getAll() {
    return [...subscribers.values()];
  },

  count() {
    return subscribers.size;
  },
};

module.exports = store;
