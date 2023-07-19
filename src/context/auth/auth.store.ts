import type { User } from "@/models/User";

interface AuthStore {
  user: User | null;
}

const defualtState: AuthStore = {
  user: null,
};

export type { AuthStore };
export { defualtState };
