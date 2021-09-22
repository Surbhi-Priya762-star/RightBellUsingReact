import axios from 'axios';

axios.defaults.headers.common['Authorization'] = JSON.parse(
  localStorage.getItem('token')
);

const url = 'http://api.rightbell.in';

// http://8b10b77538cb.ngrok.io/
const apiObject = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});

// handle race conditions
let call = {};
export default (config = {}, requestType = 'undefined') => {
  if (call[requestType]) {
    call[requestType].cancel('cancel');
  }
  call[requestType] = axios.CancelToken.source();
  config.cancelToken = call[requestType].token;
  return apiObject(config);
};
