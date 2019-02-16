import firebase from '@firebase/app';
import '@firebase/firestore';

export const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
};

export default function initDatabase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  if (!firebase.firestore) {
    throw new Error('Unable to connect to Firestore');
  }

  return firebase.firestore();
}
