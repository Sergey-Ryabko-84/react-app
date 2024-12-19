import { configureStore } from "@reduxjs/toolkit";
import { authReducer, itemsReducer } from "./modules";

const preloadedState = {};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
  },
  preloadedState,
});
