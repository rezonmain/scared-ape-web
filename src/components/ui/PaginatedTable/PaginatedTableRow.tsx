import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { PaginatedTableCheckbox } from "./PaginatedTableCheckbox";
import { PaginatedTableContext } from "./PaginatedTable.context";

interface PaginatedTableRowProps extends ComponentPropsWithoutRef<"tr"> {
  columns: Array<{
    content: ReactNode;
    className?: string;
  }>;
}

const PaginatedTableRow = forwardRef<
  HTMLTableRowElement,
  PaginatedTableRowProps
>((props, ref) => {
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  const rid = useId();
  const { columns, ...rest } = props;
  const { selectable, onRowSelect, data } = useContext(PaginatedTableContext);

  useEffect(() => {
    if (!selectable || !onRowSelect) return;
    const row = document.querySelector(`tr[data-rid="${rid}"]`);
    setRowIndex(() =>
      Array.from(row?.parentElement?.children ?? []).indexOf(row as Element)
    );
  }, [rid]);

  return (
    <tr
      {...rest}
      ref={ref}
      data-rid={rid}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      {selectable && (
        <td className="w-4 p-4">
          <PaginatedTableCheckbox
            onChange={() => onRowSelect?.(data[rowIndex ?? 0])}
          />
        </td>
      )}
      {columns.map((column, index) =>
        index === 0 ? (
          <th
            key={column.content?.toString()}
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {column.content}
          </th>
        ) : (
          <td key={column.content?.toString()} className="px-6 py-4">
            {column.content}
          </td>
        )
      )}
    </tr>
  );
});

PaginatedTableRow.displayName = "PaginatedTableRow";
export { PaginatedTableRow };
