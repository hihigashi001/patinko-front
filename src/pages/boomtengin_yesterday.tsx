import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import { useQuery } from "react-query";
import { get_boomtengin_all } from "src/states/APIs";
import {
  yesterdayToString,
  cellFunction_boomtengin,
} from "src/utilitys/functions";

const BoomYesterday = () => {
  const date_time = yesterdayToString();
  const { isLoading, error, data } = useQuery(
    ["get_boomtengin_all", date_time],
    () => get_boomtengin_all(date_time)
  );

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
        Header: "閉店時",
        accessor: "now_round_count",
      },
      {
        Header: "初当り",
        accessor: "first_bonus_round",
      },
      {
        Header: "当り回数",
        accessor: "total_bouns_count",
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
    ],
    []
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data) return null;

  return (
    <DataLayout>
      <div className="px-4 text-gray-500 text-lg font-bold bg-white">
        ブーム天神の出玉情報
      </div>
      <HeaderSub time={yesterdayToString()} />
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
