import admin from "firebase-admin";
import serviceAccountKey from "../../serviceAccountKey.json" with { type: "json" };
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      serviceAccountKey as admin.ServiceAccount,
    ),
  });
}

export const db = admin.firestore();
