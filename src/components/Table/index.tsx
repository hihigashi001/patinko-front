import { ReactElement } from "react";
import { useTable, Column, useSortBy } from "react-table";

import { TableHead } from "src/components/Table/TableHead";
import { TableBody } from "src/components/Table/TableBody";

type Props<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

type TableComponent = <T extends object>(
  props: Props<T>
) => ReactElement<Props<T>>;

export const SharedTable: TableComponent = ({ columns, data }) => {
  const instance = useTable({ columns, data }, useSortBy);
  const { getTableProps } = instance;

  return (
    <table {...getTableProps()}>
      <TableHead instance={instance} />
      <TableBody instance={instance} />
    </table>
  );
};
