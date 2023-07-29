import { useContext, useMemo } from "react";
import { PaginatedTableContext } from "./PaginatedTable.context";

const PaginatedTablePagination = () => {
  const { pagination, onPageChange } = useContext(PaginatedTableContext);

  const [firstRecordOfPage, lastRecordOfPage] = useMemo(() => {
    const recordsPerPage = Math.ceil(
      pagination.totalRecords / pagination.totalPages
    );
    return [
      pagination.currentPage * recordsPerPage + 1,
      (pagination.currentPage + 1) * recordsPerPage,
    ];
  }, [pagination.totalRecords, pagination.totalPages, pagination.currentPage]);

  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white"></span>{" "}
        {firstRecordOfPage}-{lastRecordOfPage} of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pagination.totalRecords}
        </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <a
            onClick={
              pagination.previouPage
                ? () => onPageChange?.(pagination.previouPage)
                : undefined
            }
            data-noaction={pagination.previouPage === null}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white data-[noaction=true]:cursor-not-allowed"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            onClick={
              pagination.nextPage
                ? () => onPageChange?.(pagination.nextPage)
                : undefined
            }
            data-noaction={pagination.nextPage === null}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white data-[noaction=true]:cursor-not-allowed"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { PaginatedTablePagination };
