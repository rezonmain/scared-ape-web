import { PropsWithChildren, forwardRef } from "react";

const Box = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className: string }>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      ref={ref}
      className={`p-4 bg-white border border-black rounded-lg md:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ${className} `}
    >
      {children}
    </div>
  );
});

export { Box };
