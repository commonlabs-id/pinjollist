import { NextApiRequest, NextApiResponse } from 'next';

export default function handle(_: NextApiRequest, res: NextApiResponse) {
  res.writeHead(302, {
    Location: '/docs',
  });
  res.end();
}
