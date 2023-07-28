import { ComponentPropsWithoutRef, ReactNode, useState } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: ReactNode;
  message?: ReactNode;
}

const Input = (props: InputProps) => {
  const [firstInput, setFirstInput] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        {...props}
        onChange={(e) => {
          if (!firstInput) setFirstInput(true);
          props.onChange?.(e);
        }}
        data-hasinput={firstInput}
        type={props.type ?? "text"}
        data-error={!!props.error}
        aria-describedby={props.message ? `helper-text-${props.id}` : undefined}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  data-[hasinput='true']:invalid:border-red-500 data-[hasinput='true']:invalid:text-red-900 data-[hasinput='true']:invalid:placeholder-red-700 data-[hasinput='true']:invalid:focus:ring-red-500 data-[hasinput='true']:invalid:dark:bg-gray-700 data-[hasinput='true']:invalid:focus:border-red-500 data-[hasinput='true']:invalid:dark:text-red-500 data-[hasinput='true']:invalid:dark:placeholder-red-500 data-[hasinput='true']:invalid:dark:border-red-500 disabled:bg-gray-1 disabled:cursor-not-allowed disabled:dark:text-gray-400"
      />
      {props.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {props.error}
        </p>
      )}
      {props.message && (
        <p
          id={`helper-text-${props.id}`}
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {props.message}
        </p>
      )}
    </div>
  );
};

export { Input };
