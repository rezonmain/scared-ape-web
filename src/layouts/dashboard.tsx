import { Nav } from "@/components/ui/Nav/Nav";
import { Footer } from "@/components/ui/TheFooter/Footer";
import { Sidebar } from "@/components/ui/TheSidebar/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useFlowbiteDrawer } from "@/hooks/useFlowbiteDrawer";
import { ComponentProps, useRef } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isAuth } = useAuth();
  const { drawer } = useFlowbiteDrawer(sidebarRef);

  const items: ComponentProps<typeof Sidebar>["items"] = [
    {
      href: "/",
      icon: "home",
      label: "Home",
    },
    {
      href: "/scraper",
      icon: "scraper",
      label: "Scrapers",
    },
    {
      href: "/run",
      icon: "notepad",
      label: "Runs",
    },
    {
      href: "/access-request",
      icon: "users",
      label: "Access requests",
    },
  ];

  if (isAuth) {
    items.push({
      href: "/auth/yeet",
      icon: "logout",
      label: "Log out",
    });
  }

  return (
    <div className="flex flex-row min-h-full">
      <Sidebar ref={sidebarRef} items={items} drawer={drawer} />
      <div className="flex-1 flex flex-col">
        <section className="flex-1 px-4 min-h-full">
          <Nav drawer={drawer} />
          {children}
          <Footer />
        </section>
      </div>
    </div>
  );
};

export { DashboardLayout };
