import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { useQuery } from "react-query";
import { get_akasaka_dai_history } from "src/states/APIs";
import { youbiToString } from "src/utilitys/functions";
import { Loding } from "src/components/Loding";

const Akasaka = () => {
  const [filterData, setFilterData] = useState([]);
  const router = useRouter();
  const dai_number = router.asPath.slice(9);
  const { isLoading, error, data } = useQuery(
    ["get_akasaka_dai_history", dai_number],
    () => get_akasaka_dai_history(dai_number)
  );
  const href = "http://plaza-grp.pt.teramoba2.com/akasaka/standgraph/?rack_no=" + dai_number


  const columns = useMemo(
    () => [
      {
        Header: "日付",
        accessor: "date_time",
      },
      {
        Header: "曜日",
        accessor: (row: any) => youbiToString(row.date_time),
      },
      {
        Header: "機種名",
        accessor: "model_name",
      },
      {
        Header: "初当り",
        accessor: "first_bonus_round",
        Footer: "合計: ",
      },
      {
        Header: "閉店時",
        accessor: "now_round_count",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) =>
                  Number(row.values.total_round_count) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "当り回数",
        accessor: "total_bouns_count",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) =>
                  Number(row.values.total_bouns_count) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "出玉",
        accessor: "last_dedama",
        Footer: (d: any) => {
          const total = useMemo(
            () =>
              d.rows.reduce(
                (sum: any, row: any) => Number(row.values.last_dedama) + sum,
                0
              ),
            [d.rows]
          );
          return <>{total}</>;
        },
      },
      {
        Header: "回転率",
        accessor: "round_per_en",
      },
    ],
    []
  );

  useEffect(() => {
    if (data != undefined) {
      setFilterData(data);
    }
  }, [data]);

  if (isLoading) return <Loding />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data) return null;

  return (
    <DataLayout storeName="プラザ赤坂">
      <div className="flex mb-2 px-4 text-gray-500 text-lg font-bold bg-gray-100">
        <span className="p-2">{dai_number}番台の過去データ</span>
        <a className="p-4 rounded-lg ml-4 text-sm bg-gray-700 hover:bg-gray-500 text-white" href={href}>公式HPに移動</a>
      </div>
      <SharedTable columns={columns} data={filterData} />
    </DataLayout>
  );
};

export default Akasaka;
