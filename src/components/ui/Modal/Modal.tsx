import { PropsWithChildren } from "react";
import { Button } from "../Button/Button";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalContext } from "./modal.context";
import { ModalText } from "./ModalText";

type ModalProps = PropsWithChildren<{
  onClose: () => void;
}>;

const Modal = (props: ModalProps) => {
  const { onClose, children } = props;
  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className="w-full max-w-2xl max-h-full">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

`
Usage:
<Modal onClose={handler}>
  <Modal.Header>Modal Title</Modal.Header>
  <Modal.Body>Modal Body</Modal.Body>
  <Modal.Footer>
    <Modal.Button onClick={handler}>Cancel</Modal.Button>
    <Modal.Button onClick={saveHandler}>Save</Modal.Button>
  </Modal.Footer>
</Modal>
`;

Modal.Button = Button;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Text = ModalText;
export { Modal };
