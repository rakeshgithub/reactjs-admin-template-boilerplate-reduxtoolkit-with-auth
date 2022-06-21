import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import DefaultersService from "../../services/defaulters";

export const getDefaulters = createAsyncThunk(
  "defaulters/getDefaulters",
  async ({ gstn, page, filterData }, thunkAPI) => {
    try {
      const result = await DefaultersService.getDefaulters(
        gstn,
        page,
        filterData
      );
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

const initialState = { defaulters: null };

const defaultersSlice = createSlice({
  name: "defaulters",
  initialState,

  extraReducers: {
    [getDefaulters.fulfilled]: (state, action) => {
      console.log("getDefaulters.fulfilled", action);
      state.defaulters = action.payload;
      //return { ...state, defaulters: action.payload.data };
    },
    [getDefaulters.rejected]: (state, action) => {
      state.defaulters = null;
      //return { ...state, defaulters: [] };
    },
  },
});

export default defaultersSlice.reducer;
