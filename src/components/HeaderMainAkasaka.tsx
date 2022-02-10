import React from "react";
import Link from "next/link";

export const HeaderMainAkasaka = () => {
  return (
    <header className="h-12 bg-white">
      <Link href={"/akasaka"}>
        <a className="px-6 py-4 bg-red-600 text-white mr-4">Menu</a>
      </Link>
    </header>
  );
};