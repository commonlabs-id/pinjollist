import { IncomingMessage, ServerResponse } from 'http';

export default function handler(_: IncomingMessage, res: ServerResponse): void {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      status: 'ok',
      message: 'Hello world!',
    }),
  );
}
