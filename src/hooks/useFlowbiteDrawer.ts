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
      ...opts,
    };

    setDrawer(new Drawer(target.current, options));
  }, [target, opts]);

  return {
    drawer,
  };
};

export { useFlowbiteDrawer };
