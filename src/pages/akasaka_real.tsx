import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/akasaka_real.json";

const AkasakaReal = () => {
  const data = jsonData;
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">プラザ赤坂 リアルタイムの出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table data={data} />
    </DataLayout>
  );
};

export default AkasakaReal;
