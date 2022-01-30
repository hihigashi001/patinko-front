import { DataLayout } from "src/layouts/data";
import { Table } from "src/components/Table";
import { HeaderSub } from "src/components/HeaderSub";
import jsonData from "src/data/boom_real.json";

const BoomReal = () => {
  const data = jsonData;
  const dataTime = jsonData[0].day_time;

  return (
    <DataLayout>
      <div className="text-gray-500 text-lg font-bold">天神Boomリアルタイムの出玉情報</div>
      <HeaderSub time={dataTime} />
      <Table data={data} />
    </DataLayout>
  );
};

export default BoomReal;
