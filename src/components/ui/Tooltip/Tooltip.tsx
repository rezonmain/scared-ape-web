import { useFlowbiteTooltip } from "@/hooks/useFlowbiteTooltip";
import { useId, useRef } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ children, text, position = "top" }: TooltipProps) => {
  const id = useId();
  const targetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useFlowbiteTooltip(targetRef, triggerRef);

  return (
    <>
      <div
        ref={triggerRef}
        data-tooltip-target={`tooltip-${id}`}
        data-tooltip-placement={position}
      >
        {children}
      </div>
      <div
        ref={targetRef}
        id={`tooltip-${id}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export { Tooltip };
