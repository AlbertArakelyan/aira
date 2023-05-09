import axios from 'axios';


const axiosApi = axios.create({
});

axiosApi.interceptors.request.use((req) => {
  if (req && req.headers) {
    req.headers['X-RapidAPI-Key'] = process.env.X_RAPID_API_KEY;
  }

  return req;
});

const request = (method, url, data = null, params = undefined, headers = {}) => {
  return axiosApi.request({
    method,
    url,
    data,
    params,
    headers,
  }).then((response) => {
    return response;
  }).catch((error) => {
    console.log(method, url, error.message);
    return error.response;
  });
};

export default request;