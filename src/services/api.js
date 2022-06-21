import * as axios from "axios";
//import * as miscService from "../services/Misc";
import { Navigate } from "react-router-dom";

axios.interceptors.request.use(
  function (config) {
    //miscService.showpreloader();
    return config;
  },
  function (error) {
    console.log("error", error);
    //miscService.hidepreloader();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    //miscService.hidepreloader();
    return response;
  },
  function (error) {
    if (error && error.message) {
      if (error.message.includes(401)) {
        localStorage.clear();
        return <Navigate to={"/login"} />;
      }
    }
    //miscService.hidepreloader();
    return Promise.reject(error);
  }
);
const post = async (url = "", data, token = false) => {
  console.log("Post URL ", url);
  if (token) {
    token = "Bearer " + token;
  }
  let response = await axios.post(url, data, {
    headers: { Authorization: token },
  });
  return response.data;
};
const put = async (url = "", data, token = false) => {
  if (token) {
    token = "Bearer " + token;
  }

  let response = await axios.put(url, data, {
    headers: { Authorization: token },
  });
  return response.data;
};
const get = async (url = "", token = false) => {
  if (token) {
    token = "Bearer " + token;
  }
  let response = await axios.get(url, { headers: { Authorization: token } });
  return response.data;
};
const deleteData = async (url = "", token = false) => {
  if (token) {
    token = "Bearer " + token;
  }
  let response = await axios.delete(url, { headers: { Authorization: token } });
  return response.data;
};

export { post, get, deleteData, put };
