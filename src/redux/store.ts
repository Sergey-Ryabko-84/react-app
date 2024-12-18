import { configureStore } from "@reduxjs/toolkit";

const preloadedState = {};

export const store = configureStore({
  reducer: {},
  preloadedState,
});
