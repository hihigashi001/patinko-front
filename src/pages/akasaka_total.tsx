import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/akasaka_total.json";

const AkasakaReal = () => {
  const columns = useMemo(
    () => [
      {
        Header: "台番号",
        accessor: "dai_number",
      },
      {
        Header: "機種名",
        accessor: "model_name",
      },
      {
        Header: "総当り回数",
        accessor: "total_bonus",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
      },
      {
        Header: "総出玉",
        accessor: "total_last_dedama",
      },
      {
        Header: "1日前",
        accessor: "ago1",
      },
      {
        Header: "2日前",
        accessor: "ago2",
      },
      {
        Header: "3日前",
        accessor: "ago3",
      },
      {
        Header: "4日前",
        accessor: "ago4",
      },
      {
        Header: "5日前",
        accessor: "ago5",
      },
      {
        Header: "6日前",
        accessor: "ago6",
      },
      {
        Header: "7日前",
        accessor: "ago7",
      },
    ],
    []
  );

  const data = useMemo(() => jsonData, []);
  const dataTime = jsonData[0].today;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">
        プラザ赤坂 1週間の出玉情報
      </div>
      <HeaderSub time={dataTime} />
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default AkasakaReal;
