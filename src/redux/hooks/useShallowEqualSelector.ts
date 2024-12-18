import { shallowEqual, useSelector } from "react-redux";

export function useShallowEqualSelector(
  selector: (state: unknown) => unknown
): unknown {
  return useSelector(selector, shallowEqual);
}
