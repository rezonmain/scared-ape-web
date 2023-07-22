import { MXvsUSDDTO } from "@/components/MXVsUSD/MXVsUSD.dto";
import { Json } from "@/models/Json";
import { FetchKey } from "@/types/FetchKey";
import { api } from "@/utils/api";
import useSWR from "swr";

export type KnownIds = "mx-vs-usd" | "lmg-jobs";

export type ScraperDTO<T extends KnownIds> = T extends "mx-vs-usd"
  ? MXvsUSDDTO
  : never;

const useWidgetData = (widgetId: KnownIds) => {
  const key: FetchKey = {
    method: "get",
    url: `/scraper/${widgetId}/json`,
  };
  const { data, isLoading, error } = useSWR(key, api<Json>, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return {
    data,
    json: data?.json
      ? (JSON.parse(data?.json) as ScraperDTO<typeof widgetId>)
      : null,
    isLoading,
    error,
  };
};

export { useWidgetData };
