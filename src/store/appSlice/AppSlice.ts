import { Slice, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppSliceTypes } from "./AppSliceTypes";

const initialState: AppSliceTypes = {
  isDarkMode: window?.matchMedia("(prefers-color-scheme: dark)").matches,
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
  },
});

export const { changeDarkMode } = AppSlice.actions;

export default AppSlice.reducer;
