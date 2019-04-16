import axiosBase from 'axios';

const cache = new Map();

/// cached axios
export const axios = axiosBase.create({
  adapter: config => {
    let { data, method, params, url } = config;
    let { adapter, ...adapterLessConfig } = config;
    let key = JSON.stringify({ data, method, params, url });
    if (cache.has(key))
      return new Promise((resolve, reject) =>
        resolve({ data: cache.get(key) }),
      );
    else
      return axiosBase(adapterLessConfig).then(response => {
        cache.set(key, response.data);

        return response;
      });
  },
});
