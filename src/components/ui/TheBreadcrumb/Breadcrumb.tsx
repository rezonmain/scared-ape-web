import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { Link } from "react-router-dom";
import { startCase } from "lodash";
import { Icon } from "../Icon/Icon";

const Breadcrumb = () => {
  const { crumbs } = useBreadcrumb();
  return (
    <div
      className="flex max-w-screen-xl flex-wrap items-center justify-between"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Icon name="crumbHome" />
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li>
            <div className="flex items-center">
              <Icon name="crumbChevron" />
              <Link
                to={crumb.href}
                className="ml-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {startCase(crumb.pathname)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { Breadcrumb };
