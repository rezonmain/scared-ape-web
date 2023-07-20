import { ReactNode, useReducer } from "react";
import { AuthContext } from "./auth.context";
import { authReducer } from "./auth.reducer";
import { auth } from "@/services/Auth";

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [init, dispatch] = useReducer(authReducer, auth());
  return (
    <AuthContext.Provider value={{ ...init, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
