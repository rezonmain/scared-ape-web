import { AuthContext } from "@/context/auth/auth.context";
import { auth } from "@/services/Auth";
import { useCallback, useContext } from "react";

const useAuth = () => {
  const logout = useCallback(auth().logout, []);
  const fetchUser = useCallback(auth().fetchUser, []);
  const ctx = useContext(AuthContext);
  return { ...ctx, logout, fetchUser };
};

export { useAuth };
