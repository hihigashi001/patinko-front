import axios from "axios";

import { yesterdayToString } from "src/utilitys/functions";

const apiUrl = "https://api3.amidakuji.net";

export const get_akasaka_all = async (date_time: string) => {
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

export const get_boomtengin_dai_history = async (dai_number: any) => {
  const res = await axios.get(
    `${apiUrl}/dai_data/dai-history/?store_name=boomtengin&dai_number=${dai_number}`
  );
  return res.data;
};

export const get_akasaka_dai_history = async (dai_number: any) => {
  const res = await axios.get(
    `${apiUrl}/dai_data/dai-history/?store_name=akasaka&dai_number=${dai_number}`
  );
  return res.data;
};

export const get_site_seven_all = async () => {
  const res = await axios.get(
    `${apiUrl}/site_seven/date/?date_time=${yesterdayToString()}`
  );
  return res.data;
};

export const get_page_choice = async (store_name: string, dai_number: any) => {
  const res = await axios.get(
    `${apiUrl}/page_choice/?store_name=${store_name}&dai_number=${dai_number}`
  );
  return res.data;
};
