import { Nav } from "@/components/Nav/Nav";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Root() {
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
    </>
  );
}
