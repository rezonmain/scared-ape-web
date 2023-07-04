import { useId } from "react";

interface AlertProps {
  type?: keyof typeof alerts;
  title: string;
  id: string;
  message: string;
  action?: {
    label: string;
    action: () => void;
  };
  canDissmiss?: boolean;
}

type AlertFn = (props: Omit<AlertProps, "type">) => JSX.Element;

const alerts: Record<string, AlertFn> = {
  info: (props) => (
    <div
      className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
      role="alert"
      id={props.id}
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {props.action?.label}
          </button>
        )}
        {props.canDissmiss && (
          <button
            type="button"
            className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800"
            data-dismiss-target={`#${props.id}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  ),
  danger: (props) => (
    <div
      className="w-full p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
      id={props.id}
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {props.action?.label}
          </button>
        )}
        {props.canDissmiss && (
          <button
            type="button"
            className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
            data-dismiss-target={`#${props.id}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  ),
  success: (props) => (
    <div
      className="w-full p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
      role="alert"
      id={props.id}
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {props.action?.label}
          </button>
        )}
        {props.canDissmiss && (
          <button
            type="button"
            className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
            data-dismiss-target={`#${props.id}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  ),
  warning: (props) => (
    <div
      className="w-full p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800"
      role="alert"
      id={props.id}
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            {props.action?.label}
          </button>
        )}
        {props.canDissmiss && (
          <button
            type="button"
            className="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-600 dark:border-yellow-600 dark:text-yellow-400 dark:hover:text-white dark:focus:ring-yellow-800"
            data-dismiss-target={`#${props.id}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  ),
  default: (props) => (
    <div
      className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
      role="alert"
      id={props.id}
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
          {props.title}
        </h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
          >
            {props.action?.label}
          </button>
        )}
        {props.canDissmiss && (
          <button
            type="button"
            className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white"
            data-dismiss-target={`#${props.id}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  ),
};

const Alert = ({
  type = "default",
  canDissmiss = true,
  ...props
}: Omit<AlertProps, "id">) => {
  const rId = useId();
  const id = `alert-${rId}`;
  return alerts[type]({ canDissmiss, id, ...props });
};

export default Alert;
