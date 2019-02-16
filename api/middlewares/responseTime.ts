/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'koa';

const responseTime = () => async (ctx: Context, next: () => Promise<any>) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
};

export default responseTime;
