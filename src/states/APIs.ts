import axios from "axios";

import { yesterdayToString } from "src/utilitys/functions";


const apiUrl = 'https://api3.amidakuji.net';

export const get_akasaka_all = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_all`);
  return res.data;
};

export const get_akasaka_total = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_total`);
  return res.data;
};

export const get_boomtengin_all = async () => {
  const res = await axios.get(`${apiUrl}/boomtengin_all`);
  return res.data;
};

export const get_boomtengin_total = async () => {
  const res = await axios.get(`${apiUrl}/boomtengin_total`);
  return res.data;
};

export const get_akasaka_detail = async (id:any) => {
  const res = await axios.get(`${apiUrl}/akasaka_detail/${id}`);
  return res.data;
};

export const get_site_seven_all = async () => {
  const res = await axios.get(`${apiUrl}/site_seven/date/?date_time=${yesterdayToString()}`);
  return res.data;
};