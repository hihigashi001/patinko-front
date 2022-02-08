import React from "react";
import { useTable, useSortBy } from "react-table";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead className="sticky top-32 z-50 bg-gray-200">
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th
                key={i}
                className="h-8 px-4 py-2 text-sm font-medium leading-4 tracking-wider text-left text-white border-b border-gray-200 bg-gray-700 hover:bg-gray-500 "
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="" key={i} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return (
                  <td
                    key={i}
                    className="px-6 py-4 border-b border-gray-200"
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
    </table>
  );
};
