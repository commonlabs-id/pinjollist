import { ResponseStatuses, ResponseObject } from '../types/common';

export default function buildResponse<T = {}>(
  status: ResponseStatuses,
  data: T,
): ResponseObject<T> {
  return {
    status,
    data,
  };
}
