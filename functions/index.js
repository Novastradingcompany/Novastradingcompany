const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.notifyOnGuestbookEntry = functions.firestore
  .document("guestbook/{entryId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const webhookUrl = "https://hook.us2.make.com/45wivfv4qsg7myv7nuls99n6ajxixkd5";

    try {
      await axios.post(webhookUrl, {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date().toISOString(),
      });
      console.log("✅ Webhook sent to Make.com");
    } catch (error) {
      console.error("❌ Error sending webhook:", error.message);
    }
  });
