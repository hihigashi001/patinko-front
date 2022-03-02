import { useMemo, useState } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";
import { useQuery } from "react-query";
import { get_boomtengin_all } from "src/states/APIs";
import {
  subtractDate,
  addDate,
  yesterdayToString,
  cellFunction_boomtengin,
  dateToString,
} from "src/utilitys/functions";
import { Loding } from "src/components/Loding"
import { PageMoveHeader2 } from "src/components/PageMoveHeader2";

const BoomYesterday = () => {
  const yesterday = yesterdayToString();
  const [dateTime, setDateTime] = useState(yesterday);

  const { isLoading, error, data } = useQuery(
    ["get_boomtengin_all", dateTime],
    () => get_boomtengin_all(dateTime)
  );

  const columns = useMemo(
    () => [
      {
        Header: "台番号",
        accessor: "dai_number",
        Cell: cellFunction_boomtengin,
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

  if (isLoading) return <Loding />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data) return null;

  const next_href = () => {
    const nextDate = addDate(dateTime)
    setDateTime(dateToString(nextDate))
  }

  const prev_href = () => {
    const prevDate = subtractDate(dateTime)
    setDateTime(dateToString(prevDate))
  }

  return (
    <DataLayout storeName="ブーム天神">
        <PageMoveHeader2
          next_href={next_href}
          prev_href={prev_href}
          dateTime={dateTime}
          setDateTime={setDateTime}
        />
      <SharedTable columns={columns} data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
