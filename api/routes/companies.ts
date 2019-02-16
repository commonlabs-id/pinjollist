import { Context } from 'koa';

import firebase from '../utils/firebase';
import buildResponse from '../utils/buildResponse';
import createApp from '../utils/createApp';

async function handler(ctx: Context) {
  if (firebase.firestore) {
    try {
      const { docs } = await firebase
        .firestore()
        .collection('lending_services')
        .get();

      const data = docs.map(doc => doc.data());

      ctx.status = 200;
      ctx.body = buildResponse('ok', data);
    } catch (err) {
      ctx.status = 400;
      ctx.body = buildResponse('error', {
        message: err.message,
      });
    }
  } else {
    ctx.status = 400;
    ctx.body = buildResponse('error', {
      message: 'Failed to connect to Firestore',
    });
  }
}

export default createApp(app => {
  app.use(handler);
});
