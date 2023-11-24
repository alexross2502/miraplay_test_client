import { instance } from "./axios";

const Api = {
  token: async function (token) {
    return await instance({
      url: "token",
      headers: {
        Authorization: `${token}`,
      },
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
