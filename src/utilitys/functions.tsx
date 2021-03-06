import { format } from "date-fns";
import { addDays } from 'date-fns'
import Link from "next/link";

export const formatStringToFlag = (value: any) => {
  if (value == "0") {
    return "有";
  } else {
    return "-";
  }
};

export const youbiToString = (value:string) => {
  const stringToDate = new Date(value)
  const day_arr = ['日', '月', '火', '水', '木', '金', '土']
  const youbi = day_arr[stringToDate.getDay()];
  return youbi
}

export const dateYYYYdeleteString = (value:string) => {
  const res = value.slice(5);
  return res
}

export const yesterdayToString = () => {
  const now = new Date();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );

  return format(new Date(yesterday), "yyyy-MM-dd");
};

export const dateToString = (date:any) => {
  return format(date, "yyyy-MM-dd");
};

export const addDate = (date:any) => {
  return addDays(new Date(date), 1)
};

export const subtractDate = (date:any) => {
  return addDays(new Date(date), -1)
};

export const cellFunction_boomtengin = ({value}: any) => {
  const href = "/boomtengin/" + value;
  return (
    <Link href={href}>
      <a className="px-4 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg text-lg font-bold">
        {("000" + value).slice(-3)}
      </a>
    </Link>
  );
};

export const cellFunction_akasaka = ({value}: any) => {
  const href = "/akasaka/" + value;
  return (
    <Link href={href}>
      <a className="px-6 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg text-sm font-bold">
        {("000" + value).slice(-3)}
      </a>
    </Link>
  );
};

export const cellFunction_site_seven = ({value}: any) => {
  const href = "/site-seven/" + value;
  return (
    <Link href={href}>
      <a className="px-6 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg text-sm font-bold">
        {("000" + value).slice(-3)}
      </a>
    </Link>
  );
};
