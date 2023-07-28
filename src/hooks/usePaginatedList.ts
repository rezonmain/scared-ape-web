import useSWR from "swr";
import { useReducer } from "react";
import { Paginated } from "@/types/Pagination";
import { FetchKey } from "@/types/FetchKey";
import { api } from "@/utils/api";
import { ActionOf } from "@/types/ActionOf";

type QueryParams = {
  limit: string;
  page: string;
};

type R<T> = {
  isLoading: boolean;
  error: Error;
  setQuery: React.Dispatch<ActionOf<QueryParams>>;
  query: QueryParams;
} & Paginated<T>;

const initialQuery: QueryParams = {
  limit: "10",
  page: "0",
};

/**
 * Get paginated list
 */
const usePaginatedList = <T>(
  resource: "scraper" | "access-request",
  init: QueryParams = initialQuery
): R<T> => {
  const [query, dispatch] = useReducer(queryReducer, init);
  const key: FetchKey = {
    method: "get",
    url: `/${resource}?${new URLSearchParams(init)}`,
  };

  const { data, isLoading, error } = useSWR(key, api<Paginated<T>>, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return {
    ...data,
    isLoading,
    error,
    setQuery: dispatch,
    query,
  };
};

const queryReducer = (
  state: QueryParams,
  action: ActionOf<QueryParams>
): QueryParams => {
  switch (action.type) {
    case "limit":
      return { ...state, limit: action.value, page: "0" };
    case "page":
      return { ...state, page: action.value };
    default:
      return state;
  }
};

export { usePaginatedList };
