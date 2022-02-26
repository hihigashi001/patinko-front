import { useMemo, useState } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { SharedDataPicker } from "src/components/SharedDataPicker";
import { useQuery } from "react-query";
import { get_akasaka_all } from "src/states/APIs";
import {
  dateToString,
  yesterdayToString,
  cellFunction_akasaka,
} from "src/utilitys/functions";

const AkasakaYesterday = () => {
  const yesterday = yesterdayToString();
  const [dateTime, setDateTime] = useState(yesterday);

  const { isLoading, error, data } = useQuery(
    ["get_akasaka_all", dateTime],
    () => get_akasaka_all(dateTime)
  );

  const columns = useMemo(
    () => [
      {
        Header: "台番号",
        accessor: "dai_number",
        Cell: cellFunction_akasaka,
      },
      {
        Header: "機種名",
        accessor: "model_name",
      },
      {
        Header: "初当り",
        accessor: "first_bonus_round",
      },
      {
        Header: "閉店時",
        accessor: "now_round_count",
      },
      {
        Header: "総回転数",
        accessor: "total_round_count",
      },
      {
        Header: "当り回数",
        accessor: "total_bouns_count",
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
      <div className="flex p-2">
        <div className="px-4 py-2  text-gray-500 text-lg font-bold text-center">
          プラザ赤坂
        </div>
        <SharedDataPicker
          value={dateTime!}
          onChange={(date: Date) => {
            setDateTime(dateToString(date));
          }}
        />
      </div>
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default AkasakaYesterday;
