import { getLocalStorage } from "../localStorage";

export const baseInterceptors = (instance) => {
  instance.interceptors.request.use((config) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = getLocalStorage("token");
    if (token) {
      config.headers = { "X-JWT-Token": token };
    }
    config.headers = {
      ...config.headers,
    };

    return config;
  });
};
