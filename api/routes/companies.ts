import { IncomingMessage, ServerResponse } from 'http';
import { app } from '../utils/firebase';

export default async function handler(_: IncomingMessage, res: ServerResponse) {
  if (app.firestore) {
    const { docs } = await app
      .firestore()
      .collection('lending.services')
      .get();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'ok',
        data: docs,
      }),
    );
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      status: 'error',
      message: 'Failed to connect to Firebase.',
    }),
  );
}
