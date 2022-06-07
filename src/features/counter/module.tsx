import React from "react";
import * as Rx from "typeless/rx";

import { CounterActions, CounterState, useModule } from "./interface";
import { Counter } from "./components/Counter";
import { delay } from "typeless/rx";

useModule
  .epic()
  .on(CounterActions.startCount, () =>
    Rx.of(CounterActions.countDone(1)).pipe(delay(500))
  );

const initialState: CounterState = {
  isLoading: false,
  count: 0,
};

// reducer定義
useModule
  .reducer(initialState)
  .on(CounterActions.startCount, (state) => {
    state.isLoading = true;
  })
  .on(CounterActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });

export function CounterModule() {
  // epicとreducerをロード
  useModule();

  return <Counter />;
}
