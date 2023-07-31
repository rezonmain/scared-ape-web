import { Icon } from "@/components/ui/Icon/Icon";
import { PropsWithChildren } from "react";
import { useModalContext } from "./modal.context";

const ModalHeader = (props: PropsWithChildren) => {
  const { onClose } = useModalContext();

  return (
    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {props.children}
      </h3>
      {onClose ? (
        <button
          onClick={onClose}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon name="modalClose" />
          <span className="sr-only">Close modal</span>
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export { ModalHeader };
