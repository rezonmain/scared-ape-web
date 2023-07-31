import { createContext } from "react";
import { PaginatedTableProps } from "./PaginatedTable";

const PaginatedTableContext = createContext<PaginatedTableProps<any>>({
  data: [],
  selectable: false,
  pagination: {
    position: "bottom",
    data: {
      currentPage: 1,
      totalPages: 1,
      nextPage: null,
      previousPage: null,
      pageSize: 10,
      totalRecords: 0,
    },
  },
});

export { PaginatedTableContext };
