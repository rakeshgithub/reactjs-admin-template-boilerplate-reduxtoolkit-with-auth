import * as API_URL from "../../constants/api";
import * as apiService from "../api";
import { getToken } from "../../helpers/common";

const getDefaulters = async (gstn, page, filterData) => {
  try {
    let data = {};

    let token = getToken();

    //if (gstn) {console
    data = { gstn, page, filterData };
    console.log("data", data);
    let result = await apiService.post(API_URL.GET_DEFAULTERS, data, token);
    return result;
    // }
  } catch (e) {
    return { status: false, data: {}, message: e.message };
  }
};

const getDefaulter = async (filterData) => {
  try {
    let data = {};

    let token = getToken();

    //if (gstn) {console
    data = { filterData };
    //console.log("data", data);
    let result = await apiService.post(API_URL.GET_DEFAULTER, data, token);
    return result;
    // }
  } catch (e) {
    return { status: false, data: {}, message: e.message };
  }
};

const settleDefaulter = async (formValue) => {
  try {
    let data = {};

    let token = getToken();

    //if (gstn) {console
    data = { formValue };
    //console.log("data", data);
    let result = await apiService.post(API_URL.SETTLE_DEFAULTER, data, token);
    return result;
    // }
  } catch (e) {
    return { status: false, data: {}, message: e.message };
  }
};

const defaultersService = {
  getDefaulters,
  getDefaulter,
  settleDefaulter,
};

export default defaultersService;
