import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./Slice";
export const store = configureStore({
  reducer: {
    detail: sliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
