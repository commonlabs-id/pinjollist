/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join('../', 'private-firestore.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
