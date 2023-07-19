import { AuthStore } from "./auth.store";

export type AuthAction =
  | {
      type: "setUser";
      value: AuthStore["user"];
    }
  | { type: "clearUser" };

const authReducer = (state: AuthStore, action: AuthAction): AuthStore => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.value };
    case "clearUser":
      return { ...state, user: null };
    default:
      return state;
  }
};

export { authReducer };
