import { useToastFromQuery } from "@/hooks/useToastFromQuery";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  useToastFromQuery();

  return <div className="min-h-screen">{children}</div>;
};

export { GlobalLayout };
