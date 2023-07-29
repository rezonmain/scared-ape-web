import { useContext, useMemo } from "react";
import { PaginatedTableContext } from "./PaginatedTable.context";

const PaginatedTablePagination = () => {
  const {
    pagination: { data },
    onPageChange,
  } = useContext(PaginatedTableContext);

  const [firstRecordOfPage, lastRecordOfPage] = useMemo(() => {
    return [
      (data.currentPage - 1) * data.pageSize + 1,
      data.nextPage
        ? data.pageSize * data.currentPage
        : (data.totalRecords % data.pageSize) +
          (data.currentPage - 1) * data.pageSize,
    ];
  }, [data.totalRecords, data.totalPages, data.currentPage]);

  return (
    <nav
      className="flex items-center justify-between py-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {firstRecordOfPage}-{lastRecordOfPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {data.totalRecords}
        </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <a
            onClick={
              data.previousPage
                ? () => onPageChange?.(data.previousPage)
                : undefined
            }
            data-noaction={data.previousPage === null}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg data-[noaction=false]:hover:bg-gray-100 data-[noaction=false]:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 data-[noaction=false]:dark:hover:bg-gray-700 data-[noaction=false]:dark:hover:text-white cursor-pointer data-[noaction=true]:cursor-not-allowed"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            onClick={
              data.nextPage ? () => onPageChange?.(data.nextPage) : undefined
            }
            data-noaction={data.nextPage === null}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg data-[noaction=false]:hover:bg-gray-100 data-[noaction=false]:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 data-[noaction=false]:dark:hover:bg-gray-700 data-[noaction=false]:dark:hover:text-white cursor-pointer data-[noaction=true]:cursor-not-allowed"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { PaginatedTablePagination };
