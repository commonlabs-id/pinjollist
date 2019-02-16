import { Context } from 'koa';

import initDatabase from '../utils/initDatabase';
import buildResponse from '../utils/buildResponse';
import createApp from '../utils/createApp';

async function handler(ctx: Context) {
  try {
    const firestore = initDatabase();
    const { docs } = await firestore.collection('lending_services').get();
    const data = docs.map(doc => doc.data());

    ctx.status = 200;
    ctx.body = buildResponse('ok', data);
  } catch (err) {
    ctx.status = 400;
    ctx.body = buildResponse('error', {
      message: err.message,
    });
  }
}

export default createApp(app => {
  app.use(handler);
});
