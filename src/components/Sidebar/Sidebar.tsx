import { Icon } from "../Icon/Icon";
import { SidebarItem } from "./SidebarItem";

type SidebarProps = {
  items: React.ComponentProps<typeof SidebarItem>[];
};

const Sidebar = (props: SidebarProps) => {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        scared-ape
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
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
        </ul>
      </div>
    </div>
  );
};

export { Sidebar };
