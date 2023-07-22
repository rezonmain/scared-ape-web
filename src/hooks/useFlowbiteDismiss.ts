import { Dismiss } from "flowbite";
import type { DismissOptions } from "flowbite";
import { RefObject, useEffect, useState } from "react";

const useFlowbiteDismiss = (
  target: RefObject<HTMLElement>,
  opts?: DismissOptions
) => {
  const [dismiss, setDismiss] = useState<Dismiss | null>(null);

  useEffect(() => {
    const options: DismissOptions = {
      transition: "transition-opacity",
      duration: 250,
      timing: "ease-out",
      ...opts,
    };

    setDismiss(new Dismiss(target.current, null, options));
  }, [JSON.stringify(target), JSON.stringify(opts)]);

  return {
    dismiss,
  };
};

export { useFlowbiteDismiss };
