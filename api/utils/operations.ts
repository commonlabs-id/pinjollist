import db from './firestore';

export async function getLendingServices(): Promise<FirebaseFirestore.DocumentData[]> {
  const snapshot = await db.collection('lending_services').get();
  const res: FirebaseFirestore.DocumentData[] = [];
  snapshot.forEach(doc => {
    res.push(doc.data());
  });
  return res;
}

export async function getIllegals() {
  return null;
}
