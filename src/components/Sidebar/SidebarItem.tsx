import { ComponentProps } from "react";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";
import { isNothing } from "../../utils/ez";

type SidebarItemProps = {
  href: string;
  icon?: ComponentProps<typeof Icon>["name"];
  label: string;
  items?: Omit<SidebarItemProps, "icon" | "items">[];
};

const SidebarItem = (props: SidebarItemProps) => {
  if (!isNothing(props.items)) {
    return (
      <>
        <button
          type="button"
          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          aria-controls={`dropdown-${props.label}`}
          data-collapse-toggle={`dropdown-${props.label}`}
        >
          {props.icon && <Icon name={props.icon} />}
          <span className="flex-1 ml-3 text-left whitespace-nowrap">
            {props.label}
          </span>
          <Icon name="chevronDown" />
        </button>
        <ul id={`dropdown-${props.label}`} className="hidden py-2 space-y-2">
          {props?.items?.map((item) => (
            <li>
              <a
                href={item.href}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <Link
      to={props.href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {props.icon && <Icon name={props.icon} />}
      <span className="ml-3">{props.label}</span>
    </Link>
  );
};

export { SidebarItem };
