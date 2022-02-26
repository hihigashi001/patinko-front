import { TableInstance } from "react-table";

type TableFooterProps<T extends object> = {
  instance: TableInstance<T>;
};

export const TableFooter = <T extends object>({
  instance,
}: TableFooterProps<T>) => {
  const { footerGroups } = instance;
  return (
    <thead className="sticky top-0 z-50 bg-gray-100">
      {footerGroups.map((footerGroup) => (
        <tr {...footerGroup.getFooterGroupProps()}>
          {footerGroup.headers.map((column) => (
            <th
              className="px-4 py-2 text-sm font-medium leading-1 tracking-wider text-left text-white  border-gray-200 bg-gray-700 hover:bg-gray-500 whitespace-nowrap"
              {...column.getFooterProps()}
            >
              {column.render("Footer")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
