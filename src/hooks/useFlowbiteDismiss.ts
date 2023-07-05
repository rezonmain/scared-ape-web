import { Dismiss } from "flowbite";
import type { DismissOptions } from "flowbite";
import { RefObject, useEffect, useState } from "react";

const useFlowbiteDismiss = (
  target: RefObject<HTMLElement>,
  opts?: DismissOptions
) => {
  const [dismiss, setDismiss] = useState<Dismiss>(new Dismiss());

  useEffect(() => {
    const options: DismissOptions = {
      transition: "transition-opacity",
      duration: 250,
      timing: "ease-out",
      ...opts,
    };

    const dismiss = new Dismiss(target.current, null, options);
    setDismiss(dismiss);
  }, [target, opts]);

  return {
    dismiss,
  };
};

export { useFlowbiteDismiss };
