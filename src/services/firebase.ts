import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  Buffer.from(import.meta.env.FIREBASE_ADMIN_API!, "base64").toString("utf8"),
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
