import { ComponentPropsWithoutRef, forwardRef } from "react";

const PaginatedTableBody = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<"tbody"> & { children: React.ReactNode }
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <tbody ref={ref} {...rest}>
      {children}
    </tbody>
  );
});

PaginatedTableBody.displayName = "PaginatedTableBody";
export { PaginatedTableBody };
