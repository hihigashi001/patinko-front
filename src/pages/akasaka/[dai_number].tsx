import { useRouter } from 'next/router'
import { useMemo, useEffect, useState } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { useQuery } from "react-query";
import { get_akasaka_dai_history } from "src/states/APIs";

const Akasaka = () => {
  const router = useRouter();
  const dai_number = router.asPath.slice(9);
  const { isLoading, error, data } = useQuery(
    ["get_akasaka_dai_history", dai_number],
    () => get_akasaka_dai_history(dai_number)
  );

  const columns = useMemo(
    () => [
      {
        Header: "日付",
        accessor: "date_time",
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
      {dai_number}番台の過去データ</div>
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default Akasaka;
