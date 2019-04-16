import axios from 'axios';
import { ENDPOINT as ROOT } from './config';

const ENDPOINT = `${ROOT}/people/`;

export const getAll = async (handler = null) => {
  let page = 1;
  let allItems = [];
  /// because swapi returns only 10 per page. But in order to not make client wait,
  /// we can send ready chunks using handler function
  while (true) {
    let { data } = await axios.get(ENDPOINT, { params: { page } });
    let { results, next } = data;

    if (results && results.length > 0) allItems.push(...results);
    else break;

    if (handler) handler(results);

    if (next) page += 1;
    else break;
  }

  return allItems;
};

export const search = async search => {
  let { data } = await axios.get(`${ENDPOINT}`, { params: { search } });
};
