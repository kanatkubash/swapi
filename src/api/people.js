import axios from 'axios';
import { ENDPOINT as ROOT } from './config';

const ENDPOINT = `${ROOT}/people`;

export const getAll = async () => {
  let { data } = await axios.get(ENDPOINT);

  return data;
};
