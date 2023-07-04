import { ApiError, ApiResponse } from "../types/ApiResponse.js";
import { FetchKey } from "../types/FetchKey.js";

const base = import.meta.env.VITE_API_URL;

async function api<T>(path: string): Promise<ApiResponse<T>>;
async function api<T>(key: FetchKey): Promise<ApiResponse<T>>;
async function api<T>(key: FetchKey | string): Promise<ApiResponse<T>> {
  if (typeof key === "string") {
    key = { url: key };
  }
  const url = new URL(key.url.replace("/", ""), base);
  try {
    const response = await fetch(url, {
      ...key,
      credentials: "include",
    });
    if (!response.ok) {
      throw response;
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Response) {
      const apiError = new ApiError(await error.json());
      throw apiError;
    }
    throw error;
  }
}

export { api };
