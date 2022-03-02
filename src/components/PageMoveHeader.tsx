import React from "react";
import Link from "next/link";
import { SharedIcon } from "src/components/SharedIcon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  next_dai_number: string;
  prev_dai_number: string;
  next_href: string;
  prev_href: string;
  dai_number: string;
  store_name: string;
};

export const PageMoveHeader = ({
  next_dai_number,
  prev_dai_number,
  next_href,
  prev_href,
  dai_number,
  store_name,
}: Props) => {
  return (
    <div className="flex mb-2 px-4 text-gray-500 text-lg font-bold bg-gray-100">
      {prev_dai_number == "0" ? (
        <div className="p-2 bg-gray-500">
          <SharedIcon icon={faArrowLeft} />
        </div>
      ) : (
        <Link href={prev_href}>
          <a className="p-2 hover:bg-gray-300">
            <SharedIcon icon={faArrowLeft} />
          </a>
        </Link>
      )}
      <span className="p-3">{dai_number}番台</span>
      {next_dai_number == "0" ? (
        <div className="p-2 bg-gray-500">
          <SharedIcon icon={faArrowRight} />
        </div>
      ) : (
        <Link href={next_href}>
          <a className="p-2 hover:bg-gray-300">
            <SharedIcon icon={faArrowRight} />
          </a>
        </Link>
      )}
      {
        store_name == "ブーム天神" ? (
          <a
          className="px-4 py-3 rounded-lg ml-4 text-sm bg-gray-700 hover:bg-gray-500 text-white"
          href={"http://boom-rocky.pt.teramoba2.com/boomtengin/standgraph/?rack_no=" + dai_number}
        >
          公式HP
        </a>
        ) : (
          <a
          className="px-4 py-3 rounded-lg ml-4 text-sm bg-gray-700 hover:bg-gray-500 text-white"
          href={"http://plaza-grp.pt.teramoba2.com/akasaka/standgraph/?rack_no=" + dai_number}
        >
          公式HP
        </a>
        )
      }

    </div>
  );
};
