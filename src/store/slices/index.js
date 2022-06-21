import { combineReducers } from "redux";
import authSlice from "./auth";
import messageSlice from "./message";
import defaultersSlice from "./defaulters";
import sidebarSlice from "./sidebar";
import defaulterSlice from "./defaulter";

export default combineReducers({
  authSlice,
  messageSlice,
  defaultersSlice,
  sidebarSlice,
  defaulterSlice,
});
