import admin, { type ServiceAccount } from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("/etc/secrets/serviceAccount.json", "utf8"),
);
// import serviceAccount from "../../serviceAccount.json";

// const serviceAccount = JSON.parse(
//   Buffer.from(import.meta.env.FIREBASE_ADMIN_API!, "base64").toString("utf8"),
// );

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
}

export const db = admin.firestore();
