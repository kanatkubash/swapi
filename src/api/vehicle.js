import { axios } from './axios';
import { ENDPOINT as ROOT } from './config';

const ENDPOINT = `${ROOT}/vehicles/`;

export const get = async id => {
  let { data } = await axios.get(`${ENDPOINT}${id}`);

  return data;
};
