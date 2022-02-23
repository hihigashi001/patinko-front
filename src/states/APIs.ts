import axios from "axios";

import { yesterdayToString } from "src/utilitys/functions";


const apiUrl = 'https://api3.amidakuji.net';

export const get_akasaka_all = async (data_time: string) => {
  const res = await axios.get(`${apiUrl}/dai_data/store-data/?date_time=${data_time}&store_name=akasaka`);
  return res.data;
};

export const get_akasaka_total = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_total`);
  return res.data;
};

export const get_boomtengin_all = async () => {
  const res = await axios.get(`${apiUrl}/dai_data/store-data/?date_time=${yesterdayToString()}&store_name=boomtengin`);
  return res.data;
};

export const get_site_seven_all = async () => {
  const res = await axios.get(`${apiUrl}/site_seven/date/?date_time=${yesterdayToString()}`);
  return res.data;
};

export const get_akasaka_detail = async (id:any) => {
  const res = await axios.get(`${apiUrl}/akasaka_detail/${id}`);
  return res.data;
};