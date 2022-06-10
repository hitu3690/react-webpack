import React from "react";
import { useActions } from "typeless";
import { CounterActions, getCounterState } from "../interface";

export function Counter() {
  // dispatch定義(Actionsをラップ)
  const { startCount, increment, decrement, reset, alertCount } =
    useActions(CounterActions);
  // state getter
  const { isLoading, count } = getCounterState.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? "loading..." : "startCount"}
      </button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={alertCount}>alertCount</button>

      <div>count: {count}</div>
    </div>
  );
}
