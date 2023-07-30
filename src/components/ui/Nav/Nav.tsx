import { Icon } from "../Icon/Icon";
import type { DrawerInterface } from "flowbite";
import { Breadcrumb } from "../TheBreadcrumb/Breadcrumb";

type NavProps = {
  drawer?: DrawerInterface;
};
const Nav = (props: NavProps) => {
  const { drawer } = props;

  return (
    <nav className="flex justify-between marker:items-center mb-4">
      <Breadcrumb />
      <button
        type="button"
        onClick={() => drawer?.show()}
        className="inline-flex items-center w-10 h-10 lg:hidden justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="drawer-navigation"
        aria-expanded="false"
      >
        <span className="sr-only">Open side menu navigation</span>
        <Icon name="burger" />
      </button>
    </nav>
  );
};

export { Nav };
