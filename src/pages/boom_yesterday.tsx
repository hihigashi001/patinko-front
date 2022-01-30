import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/boom_yesterday.json";

const BoomYesterday = () => {
  const data = jsonData;
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">天神Boom昨日の出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table data={data} />
    </DataLayout>
  );
};

export default BoomYesterday;
