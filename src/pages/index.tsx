import React from "react";
import Link from "next/link";

import { HomeLayout } from "src/layouts/home";

const Home = () => {
  return (
    <HomeLayout>
        <div className="flex">
        <a className="p-2 bg-gray-500 text-white mr-4">Menu</a>
      <div className="p-2 font-bold text-xl">パチンコ出玉閲覧システム</div>
        </div>
      <div className="p-4">
      <div className="mb-2 p-4 flex flex-col gap-4 max-w-md">
        <div className="text-gray-700 font-bold">Boom天神</div>
          <Link href="/boom_yesterday">
            <a className="p-4 text-base text-white bg-gray-500 rounded-lg">
              昨日のデータ
            </a>
          </Link>
          <Link href="/boom_total">
            <a className="p-4 text-base text-white bg-gray-500 rounded-lg">
              1週間のデータ
            </a>
          </Link>
        </div>
        <div className="p-4 flex flex-col gap-4 max-w-md border-1 border-red-600">
        <div className="text-red-700 font-bold">plaza赤坂</div>
          <Link href="/akasaka_yesterday">
            <a className="p-4 text-base text-white bg-red-600 rounded-lg">
              昨日のデータ
            </a>
          </Link>
          <Link href="/akasaka_total">
            <a className="p-4 text-base text-white bg-red-600 rounded-lg">
              1週間のデータ
            </a>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
