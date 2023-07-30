import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useBreadcrumb = () => {
  const { pathname } = useLocation();

  const [crumbs, setCrumbs] = useState<
    Array<{ pathname: string; href: string }>
  >([]);

  useEffect(() => {
    const pathnames = pathname.split("/").filter((crumb) => crumb);
    const crumbs = pathnames.map((path, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        pathname: path,
        href: routeTo,
      };
    });
    setCrumbs(crumbs);
  }, [pathname]);

  return { crumbs };
};

export { useBreadcrumb };
