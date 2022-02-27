import React from "react";
import { SharedDataPickerFilter } from "src/components/SharedDataPickerFilter";
import { dateToString } from "src/utilitys/functions";
import { SharedIcon } from "src/components/SharedIcon";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

type Props = {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  data: Data[];
  setFilterData: ([]) => void;
};

type Data = {
  date_time: string;
  model_name: string;
  first_bonus_round: string;
  now_round_count: string;
  total_round_count: string;
  total_bouns_count: string;
  last_dedama: string;
  round_per_en: string;
};

export const FilterHeader = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  data,
  setFilterData,
}: Props) => {
  const filterFunction = () => {
    var newData = [];
    for (var fd of data) {
      if (fd.date_time <= endDate && fd.date_time >= startDate) {
        newData.push(fd);
      }
    }
    setFilterData(newData);
  };
  return (
    <div className="p-2 flex">
      <div className="flex">
        <SharedDataPickerFilter
          value={startDate!}
          onChange={(date: Date) => {
            setStartDate(dateToString(date));
          }}
        />
      </div>
      <div className="flex">
        <div>~</div>
        <SharedDataPickerFilter
          value={endDate!}
          onChange={(date: Date) => {
            setEndDate(dateToString(date));
          }}
        />
      </div>
      <button
        className="mx-2 border border-1 border-gray-700 rounded-lg p-1 hover:bg-gray-300"
        onClick={() => filterFunction()}
      >
        <SharedIcon icon={faFilter} />
      </button>
    </div>
  );
};
