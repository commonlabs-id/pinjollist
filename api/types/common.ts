export type ResponseStatuses = 'ok' | 'error';

export interface ResponseObject<T = {}> {
  status: ResponseStatuses;
  data: T;
}
