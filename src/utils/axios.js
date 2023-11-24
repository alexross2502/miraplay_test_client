import axios from "axios";

export const instance = axios.create({
  baseURL: "https://miraplay-test-server-three.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const gameInstance = axios.create({
  baseURL: "https://api.miraplay.cloud/games/by_page",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      document.location.href = "/";
    }
    return Promise.reject(error);
  }
);
