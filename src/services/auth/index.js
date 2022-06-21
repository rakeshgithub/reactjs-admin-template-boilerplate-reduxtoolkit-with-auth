import * as API_URL from "../../constants/api";
import * as apiService from "../api";

const sendOtp = async (mobile) => {
  try {
    let data = {};
    let token = "";

    if (mobile) {
      data.mobile = mobile;

      let result = await apiService.post(API_URL.SEND_OTP, data, token);
      return result;
    }
  } catch (e) {
    return { status: false, data: {}, message: e.message };
  }
};

const verifyOtp = async (data) => {
  try {
    console.log("data to verify otp ", data);
    let result = await apiService.post(API_URL.VERIFY_OTP, data);
    return result;
  } catch (e) {
    return { status: false, data: {}, message: e.message };
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  sendOtp,
  verifyOtp,
  logout,
};

export default authService;
