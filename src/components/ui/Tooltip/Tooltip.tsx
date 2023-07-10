import { useFlowbiteTooltip } from "@/hooks/useFlowbiteTooltip";
import { useRef } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ children, text, placement = "top" }: TooltipProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useFlowbiteTooltip(targetRef, triggerRef, { placement });

  return (
    <>
      <div ref={triggerRef}>{children}</div>
      <div
        ref={targetRef}
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
