import { defer } from "lodash";
import { CSSProperties, createElement, useCallback, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useParams, useSearchParams } from "react-router-dom";

type ModalOptions = {
  name: string;
  element: JSX.Element;
};

const dialogStyle: CSSProperties = {
  padding: 0,
  appearance: "none",
  backgroundColor: "transparent",
};
/**
 * @param opt if passed, modal will open if ?modal=opt.name is in the url
 */
const useModal = () => {
  const { modal } = useParams();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [, setSearchParams] = useSearchParams();

  const _setModalParam = useCallback(
    (name: string) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("modal", name);
        return params;
      });
    },
    [modal, setSearchParams]
  );

  const _clearModalParam = useCallback(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("modal");
      return params;
    });
  }, []);

  const _openModal = useCallback(async (opt: ModalOptions) => {
    const dialog = createElement(
      "dialog",
      { style: dialogStyle, ref: dialogRef },
      opt.element
    );
    const containerNode = document.createElement("div");
    document.body.appendChild(containerNode);
    divRef.current = containerNode;
    createRoot(divRef.current).render(dialog);
    defer(() => dialogRef.current?.showModal());
    _setModalParam(opt.name);
  }, []);

  const _closeModal = useCallback(() => {
    dialogRef.current?.close();
    _clearModalParam();
  }, []);

  const openModal = useCallback((opt?: ModalOptions) => {
    if (opt) return _openModal(opt);
  }, []);

  const closeModal = useCallback(() => {
    _closeModal();
  }, []);

  return { openModal, closeModal };
};

export { useModal };
