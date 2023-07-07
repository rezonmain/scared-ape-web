import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { useFlowbiteDismiss } from "@/hooks/useFlowbiteDismiss";
import { useLocalStore } from "@/hooks/useSessionStore";

function Banner() {
  const dismissRef = useRef<HTMLDivElement>(null);
  const { set } = useLocalStore();
  const { dismiss } = useFlowbiteDismiss(dismissRef, {
    onHide: useCallback(() => set("hasClosedBanner", "true"), []),
  });

  return (
    <div
      ref={dismissRef}
      id="bottom-banner"
      tabIndex={-1}
      className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
            <Icon name="alert" />
            <span className="sr-only">Alert</span>
          </span>
          <span>
            You're currently viewing 🦍 scared-ape as a demoman{" "}
            <Link
              to="/auth"
              className="flex items-center ml-0 text-sm font-medium text-blue-600 md:ml-1 md:inline-flex dark:text-blue-500 hover:underline"
            >
              Log in to have more access <Icon name="rightArrow" />
            </Link>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => dismiss?.hide()}
          data-dismiss-target="#bottom-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon name="closeSmall" />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}

export { Banner };
