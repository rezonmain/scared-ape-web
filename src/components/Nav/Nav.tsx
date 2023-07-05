import { useStore } from "@/context/app/app.context";
import { Icon } from "../Icon/Icon";

const Nav = () => {
  const { drawer } = useStore();
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span>🦍</span>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => drawer?.toggle()}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="drawer-navigation"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Icon name="burger" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
