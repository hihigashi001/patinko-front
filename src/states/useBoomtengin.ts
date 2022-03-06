import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useQuery } from "react-query";

import { get_boomtengin_dai_history, get_page_choice } from "src/states/APIs";

export const useBoomtengin = () => {
  const [filterData, setFilterData] = useState<any>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const router = useRouter();
  const dai_number = router.asPath.slice(12);
  const { isLoading, error, data } = useQuery(
    ["get_boomtengin_dai_history", dai_number],
    () => get_boomtengin_dai_history(dai_number)
  );
  const {
    isLoading: page_isLoading,
    error: page_error,
    data: page_data,
  } = useQuery(["get_page_choice", dai_number], () =>
    get_page_choice("boomtengin", dai_number)
  );

  useEffect(() => {
    if (data != undefined) {
      setFilterData(data);
    }
  }, [data]);

  return {
    filterData,
    setFilterData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dai_number,
    isLoading,
    error,
    data,
    page_isLoading,
    page_error,
    page_data,
  };
};
