import { createContext } from "react";
import type { Dispatch } from "react";
import type { AuthStore } from "./auth.store";
import { defualtState } from "./auth.store";
import { AuthAction } from "./auth.reducer";

export interface AuthContext extends AuthStore {
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContext>({
  ...defualtState,
  dispatch: () => undefined,
});
