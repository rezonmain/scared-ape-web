import { User } from "@/models/User";
import { auth } from "@/services/Auth";
import { useCallback, useMemo, useRef } from "react";

const useAuth = () => {
  const authRef = useRef(auth);
  const logout = useCallback(authRef.current.logout, []);
  const fetchUser = useCallback(authRef.current.fetchUser, []);
  const setUser = useCallback(
    (user: User | null) => (authRef.current.user = user),
    []
  );
  const user = useMemo(() => authRef.current.user, [authRef.current.user]);
  return { user, logout, fetchUser, setUser };
};

export { useAuth };
