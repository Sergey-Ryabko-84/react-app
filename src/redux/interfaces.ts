import { Action, ThunkAction } from "@reduxjs/toolkit";

export type RootState = unknown;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
