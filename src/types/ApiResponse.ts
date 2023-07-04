export interface ApiResponse<T> {
  opts: T;
}

export interface IApiError {
  content: ApiErrorContent;
}

type ApiErrorContent = {
  error: string;
};

export class ApiError implements IApiError {
  constructor(public content: ApiErrorContent) {}
}
