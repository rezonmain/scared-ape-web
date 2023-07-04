import { Nav } from "@/components/Nav/Nav";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <Sidebar
        items={[
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
        ]}
      />
      {children}
    </>
  );
};

export { DashboardLayout };
