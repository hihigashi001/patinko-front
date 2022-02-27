import React from "react";
import Link from "next/link";
import { SharedIcon } from "src/components/SharedIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  storeName: string;
}

export const HeaderMain = ({storeName}:Props) => {
  return (
    <header className="flex">
      <Link href={"/"}>
        <a className="p-2 hover:bg-gray-300">
          <SharedIcon icon={faBars} />
        </a>
      </Link>
      <div className="px-4 py-2 font-bold text-gray-700 text-2xl">{storeName}</div>
    </header>
  );
};
