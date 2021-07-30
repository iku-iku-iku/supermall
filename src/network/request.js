import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });

  instance.interceptors.request.use(
    // 拦截请求成功
    config => {
      return config;
    },
    // 拦截请求失败(一般不可能)
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    // 拦截响应成功
    res => {
      return res.data;
    },
    // 拦截响应失败
    err => {
      console.log(err);
    }
  );

  return instance(config);
}
