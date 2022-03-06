import { useQuery } from "react-query";
import { get_akasaka_all } from "src/states/APIs";
import {
  addDate,
  dateToString,
  subtractDate,
  yesterdayToString,
} from "src/utilitys/functions";
import { atom, useAtom } from "jotai";

const yesterday: string = yesterdayToString();
const dateTimeAtom = atom(yesterday);


export const useAkasakaYesterday = () => {
  const [dateTime, setDateTime] = useAtom(dateTimeAtom);

  const { isLoading, error, data } = useQuery(
    ["get_akasaka_all", dateTime],
    () => get_akasaka_all(dateTime)
  );

  const next_href = () => {
    const nextDate = addDate(dateTime);
    setDateTime(dateToString(nextDate));
  };

  const prev_href = () => {
    const prevDate = subtractDate(dateTime);
    setDateTime(dateToString(prevDate));
  };

  return {
    isLoading,
    error,
    data,
    dateTime,
    setDateTime,
    next_href,
    prev_href,
  };
};
