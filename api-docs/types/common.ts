export interface APIResponse<T = {}> {
  status: 'ok';
  data: T;
}

export interface ErrorAPIResponse {
  status: 'error';
  data: {
    message: string;
  };
}
