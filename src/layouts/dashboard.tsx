import { Nav } from "@/components/ui/Nav/Nav";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { useFlowbiteDrawer } from "@/hooks/useFlowbiteDrawer";
import { ComponentProps, useRef } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { drawer } = useFlowbiteDrawer(sidebarRef);

  const items: ComponentProps<typeof Sidebar>["items"] = [
    {
      href: "/",
      icon: "dashboard",
      label: "Dashboard",
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
      href: "/auth",
      icon: "login",
      label: "Log in",
    },
    {
      href: "/auth/yeet",
      icon: "close",
      label: "Log out",
    },
  ];

  return (
    <>
      <Nav drawer={drawer} items={items} />
      <Sidebar ref={sidebarRef} drawer={drawer} items={items} />
      {children}
    </>
  );
};

export { DashboardLayout };
