import { send, RequestHandler } from 'micro';

import { getLendingServices } from '../utils/operations';
import buildResponse from '../utils/buildResponse';

const handler: RequestHandler = async (_, res) => {
  try {
    const data = await getLendingServices();

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
