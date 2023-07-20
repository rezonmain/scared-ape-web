import { Icon } from "../Icon/Icon";
import { ComponentProps } from "react";
import { NavItem } from "./NavItem";
import { Link } from "react-router-dom";
import { Avatar } from "../Avatar/Avatar";
import { useAuth } from "@/hooks/useAuth";
import type { DrawerInterface } from "flowbite";

type NavProps = {
  items: ComponentProps<typeof NavItem>[];
  drawer?: DrawerInterface;
};
const Nav = (props: NavProps) => {
  const { drawer, items } = props;
  const { user } = useAuth();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            🦍 scared-ape
          </span>
        </a>
        <button
          type="button"
          onClick={() => drawer?.show()}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="drawer-navigation"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Icon name="burger" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {items.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            {user && (
              <li>
                <Link to="/profile">
                  <Avatar email={user.email} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
