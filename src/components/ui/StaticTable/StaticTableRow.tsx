const StaticTableRow = () => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4">Silver</td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop</td>
      <td className="px-6 py-4">$2999</td>
    </tr>
  );
};

export { StaticTableRow };
