import { ApiError } from "./ApiResponse";

interface ILifecycleData {
  data: unknown;
  error: ApiError | null;
}

export class LifecycleData implements ILifecycleData {
  public data: unknown;
  public error: ApiError | null;

  constructor({ data, error }: { data: unknown; error: ApiError | null }) {
    this.data = data;
    this.error = error;
  }
}
