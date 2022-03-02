import React from "react";
import { SharedIcon } from "src/components/SharedIcon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { SharedDataPicker } from "src/components/SharedDataPicker";
import { dateToString } from "src/utilitys/functions";

type Props = {
  next_href: any;
  prev_href: any;
  dateTime: any;
  setDateTime: any;
};

export const PageMoveHeader2 = ({
  next_href,
  prev_href,
  dateTime,
  setDateTime,
}: Props) => {
  return (
    <div className="flex mb-2 px-4 text-gray-500 text-lg font-bold bg-gray-100">
      <button onClick={() =>prev_href()} className="p-2 hover:bg-gray-300">
        <SharedIcon icon={faArrowLeft} />
      </button>
      <SharedDataPicker
        value={dateTime!}
        onChange={(date: Date) => {
          setDateTime(dateToString(date));
        }}
      />
      <button onClick={() =>next_href()} className="p-2 hover:bg-gray-300">
        <SharedIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
