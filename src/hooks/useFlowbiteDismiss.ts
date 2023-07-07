import { Dismiss } from "flowbite";
import type { DismissOptions } from "flowbite";
import { RefObject, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const useFlowbiteDismiss = (
  target: RefObject<HTMLElement>,
  opts?: DismissOptions
) => {
  const [dismiss, setDismiss] = useState<Dismiss | null>(null);

  useDeepCompareEffect(() => {
    const options: DismissOptions = {
      transition: "transition-opacity",
      duration: 250,
      timing: "ease-out",
      ...opts,
    };

    setDismiss(new Dismiss(target.current, null, options));
  }, [target, opts]);

  return {
    dismiss,
  };
};

export { useFlowbiteDismiss };
