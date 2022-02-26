import React from "react";
import Link from "next/link";

export const HeaderMain = () => {
  return (
    <header className="h-12 bg-gray-100">
      <Link href={"/"}>
        <a className="px-6 py-4 bg-gray-500 text-white mr-4">Menu</a>
      </Link>
    </header>
  );
};
