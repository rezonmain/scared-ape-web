import { PropsWithChildren } from "react";

const ModalText = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
};
export { ModalText };
