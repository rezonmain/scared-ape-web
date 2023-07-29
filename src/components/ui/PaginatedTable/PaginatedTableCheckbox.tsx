import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

const PaginatedTableCheckbox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props, ref) => {
  const id = useId();
  return (
    <div className="flex items-center">
      <input
        {...props}
        ref={ref}
        id={props.id ?? id}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={props.id ?? id} className="sr-only">
        checkbox
      </label>
    </div>
  );
});

PaginatedTableCheckbox.displayName = "PaginatedTableCheckbox";
export { PaginatedTableCheckbox };
