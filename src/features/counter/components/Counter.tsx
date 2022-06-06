import React from "react";
import { useActions } from "typeless";
import { CounterActions, getCounterState } from "../interface";

export function Counter() {
  // dispatch定義(Actionsをラップ)
  const { startCount } = useActions(CounterActions);
  // state getter
  const { isLoading, count } = getCounterState.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? "loading.." : "increase"}
      </button>
      <div>count: {count}</div>
    </div>
  );
}
