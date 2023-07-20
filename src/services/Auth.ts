import { User } from "@/models/User";
import { LocalStorage } from "./LocalStorage";
import {
  AuthStore,
  authStoreKeys,
  defualtState,
} from "@/context/auth/auth.store";
import { api } from "@/utils/api";

class Auth {
  private storage = LocalStorage<AuthStore>(
    authStoreKeys,
    "auth",
    defualtState
  );

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

const auth = () => new Auth();

export { auth };
