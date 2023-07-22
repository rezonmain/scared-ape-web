import { useState } from "react";

export type LazyAccordionProps = {
  children?: React.ReactNode;
  summary: string;
};

const LazyAccordion = ({ summary, children }: LazyAccordionProps) => {
  const [hasCollapsed, setHasCollapsed] = useState(false);

  return (
    <details onClick={() => setHasCollapsed(true)}>
      <summary>{summary}</summary>
      <div>{hasCollapsed && <>{children}</>}</div>
    </details>
  );
};

export { LazyAccordion };
