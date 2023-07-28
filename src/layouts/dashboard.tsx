import { Nav } from "@/components/ui/Nav/Nav";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useFlowbiteDrawer } from "@/hooks/useFlowbiteDrawer";
import { QueryAlert } from "@/types/QueryAlert";
import { ComponentProps, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { drawer } = useFlowbiteDrawer(sidebarRef);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

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
    <>
      <Nav drawer={drawer} items={items} />
      <Sidebar ref={sidebarRef} drawer={drawer} items={items} />
      {children}
    </>
  );
};

export { DashboardLayout };
