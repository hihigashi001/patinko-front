import axios from "axios";

const apiUrl = 'https://api2.amidakuji.net/patinko';

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
  const res = await axios.get(`${apiUrl}/site_seven_all`);
  return res.data;
};