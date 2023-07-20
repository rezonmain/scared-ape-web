import type { User } from "@/models/User";

type AuthStore = {
  user: User | null;
};

const authStoreKeys: (keyof AuthStore)[] = ["user"];

const defualtState: AuthStore = {
  user: null,
};

export type { AuthStore };
export { defualtState, authStoreKeys };
