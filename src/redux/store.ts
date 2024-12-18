import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./modules/auth";

const preloadedState = {};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});
