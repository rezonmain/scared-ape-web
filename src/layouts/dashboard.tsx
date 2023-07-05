import { Banner } from "@/components/Banner/Banner";
import { Nav } from "@/components/Nav/Nav";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useStore } from "@/context/app/app.context";
import { useSessionStore } from "@/hooks/useSessionStore";
import { ComponentProps } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useStore();
  const { store } = useSessionStore();
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
  ];

  if (!user) {
    items.push({
      href: "/auth",
      icon: "login",
      label: "Log in",
    });
  }

  return (
    <>
      <Nav items={items} />
      <Sidebar items={items} />
      {children}
      {!store.get("hasClosedBanner") && !user && <Banner />}
    </>
  );
};

export { DashboardLayout };
