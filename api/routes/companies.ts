import { send, RequestHandler } from 'micro';

// import { getLendingServices } from '../utils/operations';
import { getSiteDataFromSheet } from '../utils/sheets';
import buildResponse from '../utils/buildResponse';

const serviceAccount = {
  client_email: process.env.FIREBASE_CLIENT_EMAIL as string,
  private_key: Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64 as string, 'base64').toString(
    'utf-8',
  ),
};

const handler: RequestHandler = async (_, res) => {
  try {
    const data = await getSiteDataFromSheet(process.env.SHEETS_ID, serviceAccount);

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
