import { lazy } from "react";

const LazyMXVsUSD = lazy(() => import("../MXVsUSD/MXVsUSD"));

export const scraperWidgets = {
  MXVsUSD: <LazyMXVsUSD />,
};
