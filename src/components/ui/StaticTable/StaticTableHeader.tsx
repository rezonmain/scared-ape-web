interface StaticTableHeaderProps {
  children: React.ReactNode;
}
const StaticTableHeader = ({ children }: StaticTableHeaderProps) => {
  return (
    <th scope="col" className="px-6 py-3 odd:bg-gray-50 odd:dark:bg-gray-800">
      {children}
    </th>
  );
};

export { StaticTableHeader };
