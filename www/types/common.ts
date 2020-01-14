export type ResponseStatuses = 'ok' | 'error';

export interface ResponseObject<T = any> {
  status: ResponseStatuses;
  data: T;
}

export interface ResponseErrorMessage {
  data: {
    message: string;
  };
}

export interface ServiceAccount {
  client_email: string;
  private_key: string;
}
