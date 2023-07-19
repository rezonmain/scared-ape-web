import { Nav } from "@/components/ui/Nav/Nav";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { ComponentProps } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
      href: "/auth/yeet",
      icon: "close",
      label: "Log out",
    },
  ];

  return (
    <>
      <Nav items={items} />
      <Sidebar items={items} />
      {children}
    </>
  );
};

export { DashboardLayout };
