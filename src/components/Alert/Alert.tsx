import { useFlowbiteDismiss } from "@/hooks/useFlowbiteDismiss";
import { Icon } from "../Icon/Icon";
import { useRef } from "react";

export interface AlertProps {
  type?: keyof typeof variants;
  title: string;
  id: string;
  message: string;
  action?: {
    label: string;
    action: () => void;
  };
  canDissmiss?: boolean;
  onDismiss?: () => void;
}

type AlertClasses = {
  container: string;
  dismissBtn: string;
  actionBtn: string;
};

const common: AlertClasses = {
  container: "w-full p-4 mb-4 border rounded-lg dark:bg-gray-800",
  dismissBtn:
    "bg-transparent border hover:text-white dark:hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 text-center",
  actionBtn:
    "text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center",
};

const variants = {
  info: {
    container:
      "text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:border-blue-800",
    dismissBtn:
      "border-blue-800 hover:bg-blue-900 focus:ring-blue-200 dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800",
    actionBtn:
      "bg-blue-800 hover:bg-blue-900 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  },
  success: {
    container:
      "text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800",
    dismissBtn:
      "border-green-800 hover:bg-green-900 focus:ring-green-200 dark:hover:bg-green-600 dark:border-green-600 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800",
    actionBtn:
      "bg-green-800 hover:bg-green-900 focus:ring-green-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  },
  warning: {
    container:
      "text-yellow-800 border-yellow-300 bg-yellow-50 dark:text-yellow-400 dark:border-yellow-800",
    dismissBtn:
      "border-yellow-800 hover:bg-yellow-900 focus:ring-yellow-200 dark:hover:bg-yellow-600 dark:border-yellow-600 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800",
    actionBtn:
      "bg-yellow-800 hover:bg-yellow-900 focus:ring-yellow-200 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
  },
  error: {
    container:
      "text-gray-800 border-red-300 bg-red-50 dark:text-red-400 dark:border-red-800",
    dismissBtn:
      "border-red-800 hover:bg-red-900 focus:ring-red-200 dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800",
    actionBtn:
      "bg-red-800 hover:bg-red-900 focus:ring-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
  },
  default: {
    container:
      "text-gray-800 border-gray-300 bg-gray-50 dark:text-gray-400 dark:border-gray-800",
    dismissBtn:
      "border-gray-800 hover:bg-gray-900 focus:ring-gray-200 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800",
    actionBtn:
      "bg-gray-800 hover:bg-gray-900 focus:ring-gray-200 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
  },
};

const Alert = ({
  type = "default",
  canDissmiss = true,
  ...props
}: Omit<AlertProps, "id">) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { dismiss } = useFlowbiteDismiss(targetRef);
  const classNames = variants[type];

  return (
    <div
      ref={targetRef}
      className={`${common.container} ${classNames.container}`}
      role="alert"
    >
      <div className="flex items-center">
        <Icon name="info" />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{props.title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{props.message}</div>
      <div className="flex">
        {props.action && (
          <button
            onClick={props.action?.action}
            type="button"
            className={`${common.actionBtn} ${classNames.actionBtn}`}
          >
            {props.action?.label}
          </button>
        )}
        {canDissmiss && (
          <button
            onClick={() => {
              if (props.onDismiss) {
                props.onDismiss();
                return;
              }
              dismiss?.hide();
            }}
            type="button"
            className={`${common.dismissBtn} ${classNames.dismissBtn}`}
            aria-label="Close"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
