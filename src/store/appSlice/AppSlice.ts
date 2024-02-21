import { Slice, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppSliceTypes } from "./AppSliceTypes";

const initialState: AppSliceTypes = {
  isDarkMode: window?.matchMedia("(prefers-color-scheme: dark)").matches,
  isShowSidebar: true,
};

const AppSlice: Slice<AppSliceTypes> = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeDarkMode: (
      state: AppSliceTypes,
      action: PayloadAction<boolean>,
    ): void => {
      state.isDarkMode = action.payload;
    },
    changeShowSidebar: (
      state: AppSliceTypes,
      action: PayloadAction<boolean>,
    ): void => {
      state.isShowSidebar = action.payload;
    },
  },
});

export const { changeDarkMode, changeShowSidebar } = AppSlice.actions;

export default AppSlice.reducer;
