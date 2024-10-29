import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlice";

export const store = configureStore({
  reducer: userReducer,
});
