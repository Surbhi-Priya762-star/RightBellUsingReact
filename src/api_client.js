/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const url = 'http://api.rightbell.in';

// http://8b10b77538cb.ngrok.io/


// handle race conditions
let call = {};
export default (config = {}, requestType = "undefined") => {

  const apiObject = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    }
  });
  
  if (call[requestType]) {
    call[requestType].cancel("cancel");
  }
  call[requestType] = axios.CancelToken.source();
  config.cancelToken = call[requestType].token;
  return apiObject(config);
};
