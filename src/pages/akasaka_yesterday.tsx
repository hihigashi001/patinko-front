import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/akasaka_yesterday.json";

const AkasakaYesterday = () => {
  const columns = useMemo(
    () => [
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
    ],
    []
  );

  const data = useMemo(() => jsonData, []);
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">プラザ赤坂 昨日の出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default AkasakaYesterday;
