import { format } from "date-fns";

export const formatStringToFlag = (value:any) => {
    if (value == "0") {
      return "有"
    } else {
      return "-"
    }
  }

  export const yesterdayToString = () => {
    const now = new Date();
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

    return format(new Date(yesterday), "yyyy-MM-dd");
  }