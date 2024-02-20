import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import AppReducer from "./appSlice/AppSlice";
import { AppSliceTypes } from "./appSlice/AppSliceTypes";

export const store: EnhancedStore<{ app: AppSliceTypes }> = configureStore({
  reducer: {
    app: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
