import { ReactElement } from "react";
import { useTable, Column, useSortBy } from "react-table";

import { TableHead } from "src/components/Table/TableHead";
import { TableBody } from "src/components/Table/TableBody";
import { TableFooter } from "src/components/Table/TableFooter";

type Props<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

type TableComponent = <T extends object>(
  props: Props<T>
) => ReactElement<Props<T>>;

export const SharedTable: TableComponent = ({ columns, data }) => {
  const instance = useTable({ columns, data, initialState: { sortBy: [{ id: 'date_time', desc: true},{ id: 'now_round_count', desc: true}]} }, useSortBy);
  const { getTableProps } = instance;

  return (
    <table {...getTableProps()} className="w-full">
      <TableHead instance={instance} />
      <TableBody instance={instance} />
      <TableFooter instance={instance} />
    </table>
  );
};
