import { Context } from 'koa';

import buildResponse from '../utils/buildResponse';
import createApp from '../utils/createApp';

async function handler(ctx: Context) {
  ctx.status = 200;
  ctx.body = buildResponse('ok', 'Pong!');
}

export default createApp(app => {
  app.use(handler);
});
