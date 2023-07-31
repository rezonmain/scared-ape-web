import { PropsWithChildren } from "react";

const ModalFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      {children}
    </div>
  );
};

export { ModalFooter };
