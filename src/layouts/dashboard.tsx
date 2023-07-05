import { Nav } from "@/components/Nav/Nav";
import { Sidebar } from "@/components/Sidebar/Sidebar";
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
      href: "/auth",
      icon: "login",
      label: "Log in",
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
