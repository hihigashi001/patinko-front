import { useMemo } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/boomtengin_real_time.json";
import { formatStringToFlag } from "src/utilitys/functions"

const BoomReal = () => {

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
        Header: "総出玉",
        accessor: "total_last_dedama",
      },
      {
        Header: "総当り回数",
        accessor: "total_bonus",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
      },
    ],
    []
  );

  const data = useMemo(() => jsonData, []);
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">天神Boom 1週間の出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomReal;
