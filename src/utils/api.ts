import { ApiError } from "../types/ApiResponse.js";
import { FetchKey } from "../types/FetchKey.js";
import { auth } from "@/services/Auth.js";

const base = import.meta.env.VITE_API_URL;

async function api<T>(path: string): Promise<T>;
async function api<T>(key: FetchKey): Promise<T>;
async function api<T>(key: FetchKey | string): Promise<T> {
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
      handleForbidden(response);
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

const handleForbidden = (response: Response) => {
  if ([403, 401].includes(response.status)) {
    auth.logout();
  }
};

export { api };
