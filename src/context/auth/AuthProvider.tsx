import { ReactNode, useReducer } from "react";
import { AuthContext } from "./auth.context";
import { authReducer } from "./auth.reducer";
import { defualtState } from "./auth.store";

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [init, dispatch] = useReducer(authReducer, defualtState);
  return (
    <AuthContext.Provider value={{ ...init, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
