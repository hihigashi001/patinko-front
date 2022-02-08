import React from "react";
import Link from "next/link";

export const HeaderMain = () => {
  return (
    <header className="flex sticky top-0 h-14 bg-white">
      <Link href={"/"}>
        <a className="px-6 py-4 bg-gray-500 text-white mr-4">Home</a>
      </Link>
      <button className="px-2 py-4 bg-red-500 text-white" onClick={() =>location.reload()}>データ再取得</button>
    </header>
  );
};
