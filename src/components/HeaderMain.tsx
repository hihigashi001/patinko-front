import React from "react";
import Link from "next/link";
import { SharedIcon } from "src/components/SharedIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

export const HeaderMain = () => {
  return (
    <header className="flex justify-between">
      <Link href={"/"}>
        <a className="p-2 hover:bg-gray-300">
          <SharedIcon icon={faBars} />
        </a>
      </Link>
      <div className="p-2 hover:bg-gray-300" onClick={() => Router.back()}>
        <SharedIcon icon={faRotateLeft} />
      </div>
    </header>
  );
};
