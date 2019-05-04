import admin from 'firebase-admin';

const serviceAccount: admin.ServiceAccount = {
  // type: 'service_account',
  projectId: process.env.FIREBASE_PROJECT_ID,
  // private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  privateKey: Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64 || '', 'base64').toString(),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // client_id: process.env.FIREBASE_CLIENT_ID,
  // auth_uri: process.env.FIREBASE_AUTH_URI,
  // token_uri: process.env.FIREBASE_TOKEN_URI,
  // auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  // client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

const config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
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
