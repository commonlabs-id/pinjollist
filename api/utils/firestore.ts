/* eslint-disable no-console */

import admin from 'firebase-admin';

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64 || '', 'base64').toString(),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const config = {
  credential: admin.credential.cert(serviceAccount),
};

export function initDatabase() {
  try {
    admin.initializeApp(config);
    console.log('Database initialized');
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  const db = admin.firestore();
  return db;
}

export const db = initDatabase();

export default db;
