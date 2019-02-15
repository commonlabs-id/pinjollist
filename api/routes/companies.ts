import { IncomingMessage, ServerResponse } from 'http';
import { app } from '../utils/firebase';

export default async function handler(_: IncomingMessage, res: ServerResponse) {
  if (app.firestore) {
    try {
      const { docs } = await app
        .firestore()
        .collection('lending_services')
        .get();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          status: 'ok',
          data: docs,
        }),
      );
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          status: 'error',
          message: err.message,
        }),
      );
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'error',
        message: 'Failed to connect to Firebase.',
      }),
    );
  }
}
