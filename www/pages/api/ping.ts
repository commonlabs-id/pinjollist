import { send, RequestHandler } from 'micro';
import buildResponse from '../../utils/buildResponse';

const handler: RequestHandler = async (_, res) => {
  send(res, 200, buildResponse('ok', 'Pong!'));
};

export default handler;
