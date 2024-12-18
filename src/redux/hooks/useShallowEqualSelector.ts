import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@redux/types";

export function useShallowEqualSelector<T>(
  selector: (state: RootState) => T
): T {
  return useSelector(selector, shallowEqual);
}
