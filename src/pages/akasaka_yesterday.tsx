import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/akasaka_yesterday.json";

const AkasakaYesterday = () => {
  const data = jsonData;
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">プラザ赤坂 昨日の出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table data={data} />
    </DataLayout>
  );
};

export default AkasakaYesterday;
