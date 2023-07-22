import { User } from "@/models/User";
import { LocalStorage } from "./LocalStorage";
import {
  AuthStore,
  authStoreKeys,
  defaultState,
} from "@/context/auth/auth.store";
import { api } from "@/utils/api";

class Auth {
  private storage = LocalStorage<AuthStore>({
    storageKeys: authStoreKeys,
    globalKey: "auth",
    initialValues: defaultState,
  });

  get user(): User | null {
    return this.storage.user;
  }

  set user(user: User | null) {
    this.storage.user = user;
  }

  async fetchUser() {
    return await api<User>("/me");
  }

  async logout() {
    api<string>({ url: "/auth/yeet", method: "post" });
    this.user = null;
  }
}

const globalWithAuth = globalThis as unknown as {
  auth: Auth | undefined;
};

const auth = globalWithAuth.auth ?? new Auth();
globalWithAuth.auth = auth;

export { auth };
