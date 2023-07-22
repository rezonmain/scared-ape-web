// interface StaticTableProps<T> {
//   columns: React.ReactNode[];
//   data: T;
//   renderRow?: (row: T) => React.ReactNode;
// }

const StaticTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <slot />
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
  );
};

export { StaticTable };
