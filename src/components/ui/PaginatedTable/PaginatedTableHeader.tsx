import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import { PaginatedTableCheckbox } from "./PaginatedTableCheckbox";
import { PaginatedTableContext } from "./PaginatedTable.context";

export interface PaginatedTableHeaderProps
  extends ComponentPropsWithoutRef<"thead"> {
  columns: Array<{
    content: ReactNode;
    className?: string;
  }>;
}

const PaginatedTableHeader = forwardRef<
  HTMLTableSectionElement,
  PaginatedTableHeaderProps
>((props, ref) => {
  const { selectable, onSelectAll, data } = useContext(PaginatedTableContext);
  const { columns, ...rest } = props;
  return (
    <thead
      ref={ref}
      {...rest}
      className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        {selectable && (
          <th scope="col" className="p-4">
            <PaginatedTableCheckbox onChange={() => onSelectAll?.(data)} />
          </th>
        )}
        {columns.map((column) => (
          <th
            key={column.content?.toString()}
            scope="col"
            className="px-6 py-3"
          >
            {column.content}
          </th>
        ))}
      </tr>
    </thead>
  );
});

PaginatedTableHeader.displayName = "PaginatedTableHeader";
export { PaginatedTableHeader };
