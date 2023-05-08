import axios from 'axios';


const axiosApi = axios.create({
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