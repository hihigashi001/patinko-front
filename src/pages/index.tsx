import React from "react";
import Link from "next/link";

import { HomeLayout } from "src/layouts/home";

const Home = () => {
  return (
    <HomeLayout>
        <div className="flex">
        <a className="p-2 bg-gray-500 text-white mr-4">Menu</a>
      <div className="p-2 text-gray-700 font-bold text-xl">パチンコ出玉閲覧システム</div>
        </div>
      <div className="p-4">
      <div className="mb-2 p-4 flex flex-col gap-8 max-w-md">
          <Link href="/boomtengin_yesterday">
            <a className="p-8 text-base text-white bg-gray-500 rounded-lg">
              ブーム天神のデータ
            </a>
          </Link>
          <Link href="/akasaka_yesterday">
            <a className="p-8 text-base text-white bg-gray-500 rounded-lg">
              プラザ赤坂のデータ
            </a>
          </Link>
          {/* <Link href="/site-seven">
            <a className="p-4 text-base text-white bg-gray-500 rounded-lg">
              サイトセブンの2店舗データ
            </a>
          </Link> */}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
