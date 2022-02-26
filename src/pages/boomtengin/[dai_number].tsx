import { useMemo, useEffect, useState } from "react";
import { DataLayout } from "src/layouts/data";
import { SharedTable } from "src/components/Table";

const Boomtengin = () => {
  const [data, setData] = useState([])

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
    </DataLayout>
  );
};

export default Boomtengin;
