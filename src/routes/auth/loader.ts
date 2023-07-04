import { api } from "@/utils/api";

async function authLoader() {
  const greet = await api("/");
  return greet;
}

export { authLoader };
