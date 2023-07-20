import { AuthProvider } from "@/context/auth/AuthProvider";
import { useToastFromQuery } from "@/hooks/useToastFromQuery";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  useToastFromQuery();
  return <AuthProvider>{children}</AuthProvider>;
};

export { GlobalLayout };
