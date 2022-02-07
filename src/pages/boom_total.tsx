import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import { useQuery } from "react-query";
import { get_boomtengin_total } from "src/states/APIs"

const BoomTotal = () => {
  const { isLoading, error, data } = useQuery("get_boomtengin_total", get_boomtengin_total);
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
        Header: "1日前(玉)",
        accessor: "ago1_dedama",
      },
      {
        Header: "1日前(転)",
        accessor: "ago1_round",
      },
      {
        Header: "2日前(玉)",
        accessor: "ago2_dedama",
      },
      {
        Header: "2日前(転)",
        accessor: "ago2_round",
      },
      {
        Header: "3日前(玉)",
        accessor: "ago3_dedama",
      },
      {
        Header: "3日前(転)",
        accessor: "ago3_round",
      },
      {
        Header: "4日前(玉)",
        accessor: "ago4_dedama",
      },
      {
        Header: "4日前(転)",
        accessor: "ago4_round",
      },
      {
        Header: "5日前(玉)",
        accessor: "ago5_dedama",
      },
      {
        Header: "5日前(転)",
        accessor: "ago5_round",
      },
      {
        Header: "6日前(玉)",
        accessor: "ago6_dedama",
      },
      {
        Header: "6日前(転)",
        accessor: "ago6_round",
      },
      {
        Header: "7日前(玉)",
        accessor: "ago7_dedama",
      },
      {
        Header: "7日前(転)",
        accessor: "ago7_round",
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
      <div className="text-gray-500 text-lg font-bold">天神Boom 1週間の出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomTotal;
