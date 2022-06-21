import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import DefaultersService from "../../services/defaulters";

export const getDefaulter = createAsyncThunk(
  "defaulters/getDefaulter",
  async ({ filterData }, thunkAPI) => {
    try {
      const result = await DefaultersService.getDefaulter(filterData);
      if (result.status) {
        return result;
      } else {
        thunkAPI.dispatch(setMessage(result.data.message));
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

export const settleDefaulter = createAsyncThunk(
  "defaulters/settleDefaulter",
  async ({ formValue }, thunkAPI) => {
    try {
      const result = await DefaultersService.settleDefaulter(formValue);
      if (result.status) {
        return result;
      } else {
        thunkAPI.dispatch(setMessage(result.data.message));
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

const initialState = { defaulter: {} };

const defaulterSlice = createSlice({
  name: "defaulter",
  initialState,

  extraReducers: {
    [getDefaulter.fulfilled]: (state, action) => {
      state.defaulter = action.payload;
    },
    [getDefaulter.rejected]: (state, action) => {
      state.defaulter = null;
    },

    [settleDefaulter.fulfilled]: (state, action) => {
      //state.defaultCaseState = action.payload;
      state.defaulter.data.defaulter.defaulter_case_id =
        action.payload.data.defaulter_case_id;
      state.defaulter.data.defaulter.settled_amount =
        action.payload.data.settled_amount;
      state.defaulter.data.defaulter.defaulted_amount =
        action.payload.data.defaulted_amount;
      state.defaulter.data.defaulter.rightoff_amount =
        action.payload.data.rightoff_amount;
    },
  },
});

export default defaulterSlice.reducer;
