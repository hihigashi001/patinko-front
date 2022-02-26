import React from "react";
import Link from "next/link";

import { HomeLayout } from "src/layouts/home";
import { SharedIcon } from "src/components/SharedIcon";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <HomeLayout>
      <div className="p-4">
        <div className="mb-2 p-4 flex flex-col gap-8 max-w-md">
        <Link href="/boomtengin_yesterday">
            <a className="flex p-8 text-2xl text-white bg-gray-700 hover:bg-gray-500 rounded-lg">
              <SharedIcon icon={faTableList} color="FFF" size="2x" />
              <span className="px-6 py-2">ブーム天神のデータ</span>
            </a>
          </Link>
          <Link href="/akasaka_yesterday">
            <a className="flex p-8 text-2xl text-white bg-gray-700 hover:bg-gray-500 rounded-lg">
              <SharedIcon icon={faTableList} color="FFF" size="2x" />
              <span className="px-6 py-2">プラザ赤坂のデータ</span>
            </a>
          </Link>
          {/* <Link href="/site-seven">
            <a className="p-4 text-base text-white bg-gray-700 hover:bg-gray-500 rounded-lg">
              サイトセブンの2店舗データ
            </a>
          </Link> */}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
