import React from "react";
import Link from "next/link";

import { HomeLayout } from "src/layouts/home";

const Home = () => {
  return (
    <HomeLayout>
        <div className="flex">
        <a className="p-2 bg-gray-500 text-white mr-4">Home</a>
      <div className="p-2 font-bold text-xl">パチンコ出玉閲覧システム</div>
        </div>
      <div className="p-4">
        <div className="p-4 flex flex-col gap-4 max-w-md">
          <Link href="/akasaka_real">
            <a className="p-4 text-sm text-white bg-red-400 rounded-lg">
              プラザ赤坂リアルタイム　(游タイム台のみ)
            </a>
          </Link>
          <Link href="/akasaka_yesterday">
            <a className="p-4 text-sm text-white bg-red-400 rounded-lg">
              プラザ赤坂昨日のデータ
            </a>
          </Link>
          <Link href="/akasaka_total">
            <a className="p-4 text-sm text-white bg-red-400 rounded-lg">
              プラザ赤坂1週間のデータ
            </a>
          </Link>
          <Link href="/boom_real">
            <a className="p-4 text-sm text-white bg-blue-500 rounded-lg">
              Boom天神リアルタイム　(游タイム台のみ)
            </a>
          </Link>
          <Link href="/boom_yesterday">
            <a className="p-4 text-sm text-white bg-blue-500 rounded-lg">
              Boom天神昨日のデータ
            </a>
          </Link>
          <Link href="/boom_total">
            <a className="p-4 text-sm text-white bg-blue-500 rounded-lg">
              Boom天神1週間のデータ
            </a>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
