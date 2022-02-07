import React from 'react'
import { useTable, useSortBy } from 'react-table'

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useSortBy)

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th key={i} className="sticky top-0 z-40 px-2 py-1 text-sm font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50" {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return <td key={i} className="px-6 py-4 border-b border-gray-200" {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


