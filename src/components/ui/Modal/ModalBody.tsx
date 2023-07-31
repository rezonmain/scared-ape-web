import { PropsWithChildren } from "react";

const ModalBody = ({ children }: PropsWithChildren<{ text?: string }>) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export { ModalBody };
