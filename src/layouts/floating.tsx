import { Footer } from "@/components/ui/TheFooter/Footer";

const FloatingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col gap-8 p-4">
      <article className="flex-1">{children}</article>
      <Footer />
    </div>
  );
};

export { FloatingLayout };
