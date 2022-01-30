import React, { useState } from "react";
import Link from "next/link";

export const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="flex">
      <Link href={"/"}>
        <a className="p-2 bg-gray-500 text-white mr-4">Home</a>
      </Link>
      <div className="p-2 bg-blue-500 text-white mr-4" onClick={menuFunction}>Menu</div>
      {openMenu ? (
      <div className="fixed ml-20 mt-8">
        <div className="flex flex-col">
          <Link href="/akasaka_real">
            <a className="border  py-4 px-12 text-sm text-white bg-blue-500">
              赤坂リアルタイム
            </a>
          </Link>
          <Link href="/akasaka_yesterday">
            <a className="border  py-4 px-12 text-sm text-white bg-blue-500">
              赤坂昨日のデータ
            </a>
          </Link>
          <Link href="/boom_real">
            <a className="border  py-4 px-12 text-sm text-white bg-blue-500">
              Boomリアルタイム
            </a>
          </Link>
          <Link href="/boom_yesterday">
            <a className="border  py-4 px-12 text-sm text-white bg-blue-500">
              Boom昨日のデータ
            </a>
          </Link>
        </div>
      </div>
      ) : undefined}
    </header>
  );
};
