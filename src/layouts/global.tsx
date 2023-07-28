import { Footer } from "@/components/ui/Footer/Footer";
import { useToastFromQuery } from "@/hooks/useToastFromQuery";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  useToastFromQuery();
  return (
    <div className="h-screen flex flex-col gap-8">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export { GlobalLayout };
