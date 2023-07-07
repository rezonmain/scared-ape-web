import { useEffect, useRef } from "react";
import { Icon } from "../Icon/Icon";
import { SidebarItem } from "./SidebarItem";
import { useFlowbiteDrawer } from "@/hooks/useFlowbiteDrawer";
import { useAppStore } from "@/context/app/app.context";

type SidebarProps = {
  items: React.ComponentProps<typeof SidebarItem>[];
};

const Sidebar = (props: SidebarProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { drawer } = useFlowbiteDrawer(targetRef);
  const { dispatch, user } = useAppStore();

  useEffect(() => {
    dispatch({ type: "set_drawer", payload: drawer });
  }, [dispatch, drawer]);

  return (
    <div
      ref={targetRef}
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      tabIndex={-1}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        scared-ape
      </h5>
      <button
        type="button"
        onClick={() => drawer?.hide()}
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <Icon name="close" />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {props.items.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
          {user && <SidebarItem label="Profile" icon="user" href="/profile" />}
        </ul>
      </div>
    </div>
  );
};

export { Sidebar };
