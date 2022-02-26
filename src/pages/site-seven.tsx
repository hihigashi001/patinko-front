import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import { useQuery } from "react-query";
import { get_site_seven_all } from "src/states/APIs";
import { yesterdayToString, cellFunction_site_seven } from "src/utilitys/functions";

const BoomYesterday = () => {
  const { isLoading, error, data } = useQuery(
    "get_site_seven_all",
    get_site_seven_all
  );
  const columns = useMemo(
    () => [
      {
        Header: "台番号",
        accessor: "dai_number",
        Cell: cellFunction_site_seven,
      },
      {
        Header: "現在の回転数",
        accessor: "now_round_count",
      },
      {
        Header: "店名",
        accessor: "store_name",
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
        Header: "当り回数",
        accessor: "total_bouns_count",
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
        サイトセブンの全店舗データ
      </div>
      <HeaderSub time={yesterdayToString()} />
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
