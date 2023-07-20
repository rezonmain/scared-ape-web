import { User } from "@/models/User";

type AuthStore = {
  user: User | null;
};

const authStoreKeys: (keyof AuthStore)[] = ["user"];

const defaultState: AuthStore = {
  user: null,
};
export type { AuthStore };
export { authStoreKeys, defaultState };
