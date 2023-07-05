import { RefObject, useEffect, useState } from "react";
import { type DrawerOptions, type DrawerInterface, Drawer } from "flowbite";

const useFlowbiteDrawer = (
  target: RefObject<HTMLElement>,
  opts?: DrawerOptions
) => {
  const [drawer, setDrawer] = useState<DrawerInterface>();

  useEffect(() => {
    const options: DrawerOptions = {
      placement: "left",
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: "",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 transition-opacity duration-300 ease-in-out",
      ...opts,
    };

    setDrawer(new Drawer(target.current, options));
  }, [target, opts]);

  return {
    drawer,
  };
};

export { useFlowbiteDrawer };
