import admin from "firebase-admin";
// Probando;
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(import.meta.env.FIREBASE_ADMIN_API as string),
    ),
  });
}

export const db = admin.firestore();
