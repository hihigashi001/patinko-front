import React from 'react'
import { useTable, useSortBy } from 'react-table'

export const Table = ({ data }) => {
  const columns = [
    {
      Header: "現在の回転数",
      accessor: "now_roud_count",
    },
    {
      Header: "当り回数",
      accessor: "bonus",
    },
    {
      Header: "游タイム",
      accessor: "yuu_time",
    },
    {
      Header: "台番号",
      accessor: "dai_number",
    },
    {
      Header: "機種名",
      accessor: "model_name",
    },
    {
      Header: "総回転数",
      accessor: "total_round_count",
    },
    {
      Header: "出玉",
      accessor: "last_dedama",
    },
    {
      Header: "回転率",
      accessor: "round_per_en",
    },
  ];
  
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
              <th key={i} className="px-2 py-1 text-sm font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50" {...column.getHeaderProps(column.getSortByToggleProps())}>
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


