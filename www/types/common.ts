export type ResponseStatuses = 'ok' | 'error';

export interface ResponseObject<T = {}> {
  status: ResponseStatuses;
  data: T;
}

export interface ServiceAccount {
  client_email: string;
  private_key: string;
}
