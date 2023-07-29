import useSWR from "swr";
import { useCallback } from "react";
import { Paginated } from "@/types/Pagination";
import { FetchKey } from "@/types/FetchKey";
import { api } from "@/utils/api";
import { useSearchParams } from "react-router-dom";

type QueryParams = {
  limit: string;
  page: string;
};

type R<T> = {
  isLoading: boolean;
  error: Error;
  setQuery: (query: Partial<QueryParams>) => void;
  query: QueryParams;
} & Paginated<T>;

const initialQuery: QueryParams = {
  limit: "10",
  page: "1",
};

/**
 * Get paginated list
 */
const usePaginatedList = <T>(
  resource: "scraper" | "access-request",
  init: QueryParams = initialQuery
): R<T> => {
  const [searchParams, setSearchParams] = useSearchParams(init);
  const setQuery = useCallback(
    (query: Partial<QueryParams>) => setSearchParams(query),
    []
  );

  const key: FetchKey = {
    method: "get",
    url: `/${resource}?${searchParams}`,
  };

  const { data, isLoading, error } = useSWR(key, api<Paginated<T>>, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return {
    ...data,
    isLoading,
    error,
    setQuery,
    query: Object.fromEntries(searchParams) as QueryParams,
  };
};

export { usePaginatedList };
