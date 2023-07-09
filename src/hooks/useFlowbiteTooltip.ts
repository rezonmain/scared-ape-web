import { Tooltip } from "flowbite";
import type { TooltipInterface, TooltipOptions } from "flowbite";
import { RefObject, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const useFlowbiteTooltip = (
  target: RefObject<HTMLElement>,
  trigger: RefObject<HTMLElement>,
  opts?: TooltipOptions
) => {
  const [tooltip, setTooltip] = useState<TooltipInterface | null>(null);

  useDeepCompareEffect(() => {
    const options: TooltipOptions = {
      placement: "top",
      triggerType: "hover",
      ...opts,
    };

    setTooltip(new Tooltip(target.current, trigger.current, options));
  }, [target, opts]);

  return {
    tooltip,
  };
};

export { useFlowbiteTooltip };
