import { Tooltip } from "flowbite";
import type { TooltipInterface, TooltipOptions } from "flowbite";
import { RefObject, useEffect, useState } from "react";

const useFlowbiteTooltip = (
  target: RefObject<HTMLElement>,
  trigger: RefObject<HTMLElement>,
  opts?: TooltipOptions
) => {
  const [tooltip, setTooltip] = useState<TooltipInterface | null>(null);

  useEffect(() => {
    const options: TooltipOptions = {
      placement: "top",
      triggerType: "hover",
      ...opts,
    };

    setTooltip(new Tooltip(target.current, trigger.current, options));
  }, [target, JSON.stringify(opts)]);

  return {
    tooltip,
  };
};

export { useFlowbiteTooltip };
