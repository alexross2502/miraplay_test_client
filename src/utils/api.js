import { instance } from "./axios";

const Api = {
  get: async function (url) {
    return await instance({
      url,
    });
  },

  post: async function (url, data) {
    return await instance({
      url,
      method: "post",
      data,
    });
  },
};

export default Api;
