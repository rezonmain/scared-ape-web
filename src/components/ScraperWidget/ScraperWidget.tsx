import { Suspense } from "react";
import { scraperWidgets } from "./scraperWidgets";
import { Spinner } from "flowbite-react";

export type ScraperWidgetProps = {
  widget: keyof typeof scraperWidgets;
};

const ScraperWidget = ({ widget }: ScraperWidgetProps) => {
  if (!scraperWidgets[widget]) {
    return <></>;
  }
  return <Suspense fallback={<Spinner />}>{scraperWidgets[widget]}</Suspense>;
};

export { ScraperWidget };
