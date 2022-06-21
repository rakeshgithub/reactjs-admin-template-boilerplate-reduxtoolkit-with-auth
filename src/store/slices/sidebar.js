import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  expanded: true,
  cssClass: "col-lg-2 col-md-4 col-12",
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setExpaned(state) {
      state.expanded = true;
      state.cssClass = "col-lg-2 col-md-4 col-12";
    },
    setCollapse(state) {
      state.expanded = false;
      state.cssClass = "col-lg-1 col-md-1 col-12";
    },
  },
});

export const { setExpaned, setCollapse } = sidebarSlice.actions;
export default sidebarSlice.reducer;
