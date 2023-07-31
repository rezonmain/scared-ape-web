import { ComponentProps, createContext, useContext } from "react";
import { Modal } from "./Modal";
import { nop } from "@/utils/_";

const ModalContext = createContext<ComponentProps<typeof Modal>>({
  onClose: nop,
});

const useModalContext = (): ComponentProps<typeof Modal> => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "Modal.* components must be rendered as child of Modal component"
    );
  }
  return context;
};

export { ModalContext, useModalContext };
