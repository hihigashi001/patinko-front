import { TableInstance } from "react-table";

type TableHeadProps<T extends object> = {
  instance: TableInstance<T>;
};

export const TableHead = <T extends object>({
  instance,
}: TableHeadProps<T>) => {
  const { headerGroups } = instance;
  return (
    <thead className="sticky top-0 z-50 bg-gray-100">
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              className="px-2 py-2 text-sm font-medium leading-1 tracking-wider text-left text-white  border-gray-200 bg-gray-700 hover:bg-gray-500 whitespace-nowrap"
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
