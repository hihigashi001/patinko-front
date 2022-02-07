import axios from "axios";

const apiUrl = 'https://api.amidakuji.net/patinko';

export const get_akasaka_all = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_all`);
  return res.data;
};

export const get_akasaka_total = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_total`);
  return res.data;
};

export const get_akasaka_real_time = async () => {
  const res = await axios.get(`${apiUrl}/akasaka_real_time`);
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

export const get_boomtengin_real_time = async () => {
  const res = await axios.get(`${apiUrl}/boomtengin_real_time`);
  return res.data;
};