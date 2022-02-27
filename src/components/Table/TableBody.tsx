import { TableInstance } from "react-table";

type TableBodyProps<T extends object> = {
  instance: TableInstance<T>;
};

export const TableBody = <T extends object>({
  instance,
}: TableBodyProps<T>) => {
  const { prepareRow, getTableBodyProps, rows } = instance;

  return (
    <tbody {...getTableBodyProps()}>
      {!rows.length && (
        <tr>
          <td
            className="px-4 py-12 border-b border-gray-200 text-gray-700"
            colSpan={6}
          >
            ※ データがありません
          </td>
        </tr>
      )}
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <td
                  className="px-4 py-2 border-b border-gray-200 text-gray-700"
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
