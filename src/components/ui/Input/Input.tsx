import { ComponentPropsWithoutRef, ReactNode } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: ReactNode;
  message?: ReactNode;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invalid:text-red-700 invalid:dark:text-red-500"
      >
        {props.label}
      </label>
      <input
        {...props}
        type={props.type ?? "text"}
        data-error={!!props.error}
        aria-describedby={props.message ? `helper-text-${props.id}` : undefined}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  invalid:border-red-500 invalid:text-red-900 invalid:placeholder-red-700 invalid:focus:ring-red-500 invalid:dark:bg-gray-700 invalid:focus:border-red-500 invalid:dark:text-red-500 invalid:dark:placeholder-red-500 invalid:dark:border-red-500 disabled:bg-gray-1 disabled:cursor-not-allowed disabled:dark:text-gray-400"
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
