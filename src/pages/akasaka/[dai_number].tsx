import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { youbiToString } from "src/utilitys/functions";
import { Loding } from "src/components/Loding";
import { FilterHeader } from "src/components/FilterHeader";
import { PageMoveHeader } from "src/components/PageMoveHeader";
import { useAkasaka } from "src/states/useAkasaka";

const Akasaka = () => {
  const {
    filterData,
    setFilterData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dai_number,
    isLoading,
    error,
    data,
    page_isLoading,
    page_error,
    page_data,
  } = useAkasaka();

  const columns = useMemo(
    () => [
      {
        Header: "日付",
        accessor: "date_time",
      },
      {
        Header: "曜日",
        accessor: (row: any) => youbiToString(row.date_time),
      },
      {
        Header: "機種名",
        accessor: "model_name",
      },
      {
        Header: "初当り",
        accessor: "first_bonus_round",
        Footer: "合計: ",
      },
      {
        Header: "閉店時",
        accessor: "now_round_count",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) =>
                  Number(row.values.total_round_count) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "当り回数",
        accessor: "total_bouns_count",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) =>
                  Number(row.values.total_bouns_count) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "出玉",
        accessor: "last_dedama",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) => Number(row.values.last_dedama) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "回転率",
        accessor: "round_per_en",
      },
    ],
    []
  );

  if (page_isLoading) return <Loding />;
  if (isLoading) return <Loding />;
  if (page_error) return <p>Error: {JSON.stringify(error)}</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!page_data) return null;
  if (!data) return null;

  const next_href = "/akasaka/" + page_data.next_dai_number;
  const prev_href = "/akasaka/" + page_data.prev_dai_number;

  return (
    <DataLayout storeName="プラザ赤坂">
      <PageMoveHeader
        next_dai_number={page_data.next_dai_number}
        prev_dai_number={page_data.prev_dai_number}
        next_href={next_href}
        prev_href={prev_href}
        dai_number={dai_number}
        store_name={"プラザ赤坂"}
      />
      <FilterHeader
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        data={data}
        setFilterData={setFilterData}
      />
      <SharedTable columns={columns} data={filterData} />
    </DataLayout>
  );
};

export default Akasaka;
