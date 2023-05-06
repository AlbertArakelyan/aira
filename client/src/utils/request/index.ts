import axios, { Method, AxiosResponse } from 'axios';

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const request = <T = any, D = any, R = AxiosResponse<T>>(method: Method, url: string, data?: D, params?: any): Promise<R> => {
  return axiosApi.request<T, R, D>({
    method,
    url,
    data,
    params,
  }).then((response): R => {
    return response;
  }).catch((error) => {
    console.log(method, url, error.message);
    return error.response;
  });
};

export default request;