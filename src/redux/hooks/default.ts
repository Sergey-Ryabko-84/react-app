import * as ReactRedux from "react-redux";
import { AppDispatch, RootState } from "@redux/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = ReactRedux.useDispatch;
export const useSelector: ReactRedux.TypedUseSelectorHook<RootState> =
  ReactRedux.useSelector;
