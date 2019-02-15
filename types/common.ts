import { IncomingMessage, ServerResponse } from 'http';

export type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

export interface ResponseObject<T = {}> {
  status: 'string';
  data: T;
}
