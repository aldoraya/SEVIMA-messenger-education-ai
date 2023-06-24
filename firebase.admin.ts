import admin from "firebase-admin"; 
import { getApps } from "firebase-admin/app"; 
// const serviceAccount = require("./serviceAccount Key.json");
const serviceAccount = JSON.parse(
process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);
if (!getApps ().length)
admin. initializeApp({
credential: admin.credential.cert(service Account),
});
const adminDb = admin. firestore();
export adminDb };