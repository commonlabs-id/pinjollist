import { IncomingMessage, ServerResponse } from 'http';

export type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

export type ResponseStatuses = 'ok' | 'error';

export interface ResponseObject<T = {}> {
  status: ResponseStatuses;
  data: T;
}
