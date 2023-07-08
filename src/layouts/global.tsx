import { useToastFromQuery } from "@/hooks/useToastFromQuery";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  useToastFromQuery();
  return <>{children}</>;
};

export { GlobalLayout };
