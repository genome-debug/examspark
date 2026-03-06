// backend/src/utils/generateVapid.js
// Run: node src/utils/generateVapid.js
// Copy the output into your .env file

const webpush = require("web-push");

const vapidKeys = webpush.generateVAPIDKeys();

console.log("\n✅ VAPID Keys Generated — Copy these into your .env:\n");
console.log(`VAPID_PUBLIC_KEY=${vapidKeys.publicKey}`);
console.log(`VAPID_PRIVATE_KEY=${vapidKeys.privateKey}`);
console.log("\n🔐 Keep VAPID_PRIVATE_KEY secret. Share VAPID_PUBLIC_KEY with the mobile app.\n");
