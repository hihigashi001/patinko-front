import { useMemo, useEffect, useState } from "react";
import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { useQuery } from "react-query";
import { get_akasaka_detail } from "src/states/APIs";
import { useRouter } from 'next/router'

const AkasakaDetail = () => {
  const [data, setData] = useState([])
  const router = useRouter()
  const {dai_number} = router.query

  // useEffect(() => {
  //   if(router.isReady) {
  //     const data = get_akasaka_detail(dai_number)
  //     setData(data)
  //   }
  //   },[dai_number, router]);

  const columns = useMemo(
    () => [
      {
        Header: "日付",
        accessor: "day_time",
      },
      {
        Header: "機種名",
        accessor: "model_name",
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
        Header: "現在の回転数",
        accessor: "now_round_count",
      },
      {
        Header: "出玉",
        accessor: "last_dedama",
      },
      {
        Header: "回転率",
        accessor: "round_per_en",
      },
      {
        Header: "初当り回転数",
        accessor: "first_bonus_round",
      },
    ],
    []
  );

  return (
    <DataLayout>
      <div className="text-red-600 text-lg font-bold bg-white">
        ブーム天神 {dai_number} 番台の1週間出玉情報
      </div>
      <Table columns={columns} data={data} />
    </DataLayout>
  );
};

export default AkasakaDetail;
