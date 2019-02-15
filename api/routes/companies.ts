import { IncomingMessage, ServerResponse } from 'http';
import { app } from '../utils/firebase';
import buildResponse from '../utils/buildResponse';

export default async function handler(_: IncomingMessage, res: ServerResponse) {
  if (app.firestore) {
    try {
      const { docs } = await app
        .firestore()
        .collection('lending_services')
        .get();

      const data = docs.map(doc => doc.data());

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(buildResponse('ok', data)));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify(
          buildResponse('error', {
            message: err.message,
          }),
        ),
      );
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        buildResponse('error', {
          message: 'Failed to connect to Firestore',
        }),
      ),
    );
  }
}
