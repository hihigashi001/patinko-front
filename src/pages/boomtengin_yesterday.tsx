import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { cellFunction_boomtengin } from "src/utilitys/functions";
import { Loding } from "src/components/Loding";
import { PageMoveHeader2 } from "src/components/PageMoveHeader2";
import { useBoomtenginYesterday } from "src/states/useBoomtenginYesterday";

const BoomYesterday = () => {
  const {
    isLoading,
    error,
    data,
    dateTime,
    setDateTime,
    next_href,
    prev_href,
  } = useBoomtenginYesterday();

  const columns = useMemo(
    () => [
      {
        Header: "台番号",
        accessor: "dai_number",
        Cell: cellFunction_boomtengin,
      },
      {
        Header: "機種名",
        accessor: "model_name",
      },
      {
        Header: "初当り",
        accessor: "first_bonus_round",
      },
      {
        Header: "閉店時",
        accessor: "now_round_count",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
      },
      {
        Header: "当り回数",
        accessor: "total_bouns_count",
      },
      {
        Header: "出玉",
        accessor: "last_dedama",
      },
      {
        Header: "回転率",
        accessor: "round_per_en",
      },
    ],
    []
  );

  if (isLoading) return <Loding />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data) return null;

  return (
    <DataLayout storeName="ブーム天神">
      <PageMoveHeader2
        next_href={next_href}
        prev_href={prev_href}
        dateTime={dateTime}
        setDateTime={setDateTime}
      />
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
