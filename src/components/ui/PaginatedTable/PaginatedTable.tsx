import { PaginatedTableContext } from "./PaginatedTable.context";
import { PaginatedTableHeader } from "./PaginatedTableHeader";
import { PaginatedTableRow } from "./PaginatedTableRow";
import { PaginatedTableBody } from "./PaginatedTableBody";
import { IPagination } from "@/types/Pagination";
import { PaginatedTablePagination } from "./PaginatedTablePagination";

type PaginatedTableProps<T extends Array<unknown>> = {
  data: T;
  selectable?: boolean;
  onRowSelect?: (row: T[number]) => void;
  onSelectAll?: (data: T) => void;
  onPageChange?: (page: number | null) => void;
  pagination: IPagination;
};

const PaginatedTable = <T extends Array<unknown>>(
  props: React.PropsWithChildren<PaginatedTableProps<T>>
) => {
  const {
    children,
    data,
    selectable,
    onPageChange,
    pagination,
    onRowSelect,
    onSelectAll,
    ...rest
  } = props;
  return (
    <PaginatedTableContext.Provider
      value={{
        data,
        selectable,
        onPageChange,
        pagination,
        onRowSelect,
        onSelectAll,
      }}
    >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          {...rest}
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          {children}
        </table>
        <PaginatedTablePagination />
      </div>
    </PaginatedTableContext.Provider>
  );
};

PaginatedTable.Body = PaginatedTableBody;
PaginatedTable.Header = PaginatedTableHeader;
PaginatedTable.Row = PaginatedTableRow;
PaginatedTable.displayName = "PaginatedTable";
export type { PaginatedTableProps };
export { PaginatedTable };
