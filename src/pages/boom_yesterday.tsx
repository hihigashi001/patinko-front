import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import { useQuery } from "react-query";
import { get_boomtengin_all } from "src/states/APIs";

const BoomYesterday = () => {
  const { isLoading, error, data } = useQuery(
    "get_boomtengin_all",
    get_boomtengin_all
  );
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data) return null;

  const dataTime = data[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold sticky top-14 h-12 bg-white">
        天神Boom昨日の出玉情報
      </div>
      <HeaderSub time={dataTime} />
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
