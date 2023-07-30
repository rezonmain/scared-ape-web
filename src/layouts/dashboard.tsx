import { Nav } from "@/components/ui/Nav/Nav";
import { Footer } from "@/components/ui/TheFooter/Footer";
import { Sidebar } from "@/components/ui/TheSidebar/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useFlowbiteDrawer } from "@/hooks/useFlowbiteDrawer";
import { QueryAlert } from "@/types/QueryAlert";
import { ComponentProps, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { drawer } = useFlowbiteDrawer(sidebarRef);

  useEffect(() => {
    if (!isAuth) {
      const { params } = new QueryAlert({
        title: "Not signed in",
        message:
          "Either your session expired or you navigated to a page by accident, please log in",
        type: "info",
      });
      navigate(`/auth?${params}`);
    }
  }, [isAuth]);

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
      icon: "user",
      label: "Access requests",
    },
  ];

  if (isAuth) {
    items.push({
      href: "/auth/yeet",
      icon: "close",
      label: "Log out",
    });
  }

  return (
    <div className="flex flex-row">
      <Sidebar ref={sidebarRef} items={items} drawer={drawer} />
      <div className="flex-1 pt-2 flex flex-col">
        <section className="flex-1">
          <Nav drawer={drawer} />
          {children}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export { DashboardLayout };
