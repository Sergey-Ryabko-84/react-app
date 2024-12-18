import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType, UserType } from "./types";

const initialState: AuthStateType = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserType>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
