import axios from "axios";

import { yesterdayToString } from "src/utilitys/functions";

const apiUrl = "https://api3.amidakuji.net";

export const get_akasaka_all = async ( date_time: string) => {
  const res = await axios.get(
    `${apiUrl}/dai_data/store-data/?date_time=${date_time}&store_name=akasaka`
  );
  return res.data;
};

export const get_boomtengin_all = async (date_time: string) => {
  const res = await axios.get(
    `${apiUrl}/dai_data/store-data/?date_time=${date_time}&store_name=boomtengin`
  );
  return res.data;
};

export const get_site_seven_all = async () => {
  const res = await axios.get(
    `${apiUrl}/site_seven/date/?date_time=${yesterdayToString()}`
  );
  return res.data;
};

export const get_akasaka_detail = async (id: any) => {
  const res = await axios.get(`${apiUrl}/akasaka_detail/${id}`);
  return res.data;
};
