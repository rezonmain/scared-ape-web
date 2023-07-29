import { createContext } from "react";
import { PaginatedTableProps } from "./PaginatedTable";

const PaginatedTableContext = createContext<PaginatedTableProps<any>>({
  data: [],
  selectable: false,
  pagination: {
    currentPage: 0,
    nextPage: null,
    previouPage: null,
    totalPages: 0,
    totalRecords: 0,
  },
});

export { PaginatedTableContext };
