import { send, RequestHandler } from 'micro';

import initDatabase from '../utils/initDatabase';
import buildResponse from '../utils/buildResponse';

const handler: RequestHandler = async (_, res) => {
  try {
    const firestore = initDatabase();
    const { docs } = await firestore.collection('lending_services').get();
    const data = docs.map(doc => doc.data());

    send(res, 200, buildResponse('ok', data));
  } catch (err) {
    send(
      res,
      400,
      buildResponse('error', {
        message: err.message,
      }),
    );
  }
};

export default handler;
