import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import responseTime from '../middlewares/responseTime';

export default function createApp(main: (app: Koa) => void) {
  const app = new Koa();

  app.use(logger());
  app.use(bodyParser());
  app.use(responseTime());
  app.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    try {
      await next();
    } catch (err) {
      throw err;
    }
  });

  main(app);

  return app.callback();
}
