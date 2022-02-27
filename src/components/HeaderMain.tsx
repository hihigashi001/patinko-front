import React from "react";
import Link from "next/link";
import { SharedIcon } from "src/components/SharedIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HeaderMain = () => {
  return (
    <header className="flex justify-between">
      <Link href={"/"}>
        <a className="p-2 hover:bg-gray-300">
          <SharedIcon icon={faBars} />
        </a>
      </Link>
    </header>
  );
};
