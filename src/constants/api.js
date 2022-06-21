export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const SEND_OTP = API_ENDPOINT + "user/sendotp";
export const VERIFY_OTP = API_ENDPOINT + "user/verifyOtp";
export const LOGOUT = API_ENDPOINT + "auth/logout";
export const GET_DEFAULTERS = API_ENDPOINT + "settlement/defaulters";
export const GET_DEFAULTER = API_ENDPOINT + "settlement/get-defaulter";
export const SETTLE_DEFAULTER = API_ENDPOINT + "settlement/settle-defaulter";
