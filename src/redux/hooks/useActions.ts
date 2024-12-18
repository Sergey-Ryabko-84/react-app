import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { AppDispatch } from "@redux/types";

export function useActions<T extends ActionCreatorsMapObject>(
  actions: T,
  deps?: ReadonlyArray<unknown>
): T {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
