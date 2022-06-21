import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../../services/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async ({ mobile }, thunkAPI) => {
    try {
      const data = await AuthService.sendOtp(mobile);
      if (data.status) {
        thunkAPI.dispatch(setMessage(`OTP successfully sent to ${mobile}`));
        return { otp: data.message };
      } else {
        thunkAPI.dispatch(setMessage(data.message));
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (params, thunkAPI) => {
    try {
      console.log("params ", params);
      const mobile = params.mobile;
      const otp = params.otp;
      const data = await AuthService.verifyOtp({ mobile, otp });
      console.log("verify otppp data", data);
      if (data.status) {
        thunkAPI.dispatch(setMessage("OTP verified successfully!"));
        return { user: data };
      } else {
        thunkAPI.dispatch(setMessage("OTP is not valid"));
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

let isLoggedIn = false;

if (user) {
  isLoggedIn = true;
}

const initialState = {
  auth: { isLoggedIn: isLoggedIn, user: user, otp: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("user");
      state.auth.isLoggedIn = false;
      state.auth.user = null;
      state.auth.otp = null;
    },
  },
  extraReducers: {
    [sendOtp.fulfilled]: (state, action) => {
      state.auth.otp = "sent";
    },
    [sendOtp.rejected]: (state, action) => {
      state.auth.otp = "failed";
      state.auth.isLoggedIn = false;
      state.auth.user = null;
    },
    [verifyOtp.fulfilled]: (state, action) => {
      state.auth.otp = "veirfied";
      state.auth.isLoggedIn = true;
      state.auth.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    [verifyOtp.rejected]: (state, action) => {
      state.auth.otp = "sent";
      state.auth.isLoggedIn = false;
      state.auth.user = null;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.auth.isLoggedIn = false;
    //   state.auth.user = null;
    // },
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
