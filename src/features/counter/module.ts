import React from "react";
import * as Rx from "typeless/rx";

import { CounterActions, CounterState, useModule } from "./interface";
import { Counter } from "./components/Counter";

useModule.epic().on(CounterActions.startCount, () => {
  return Rx.of(CounterActions.countDone(1).pipe(Rx.delay(500)));
});

const initialState: CounterState = {
  isLoading: false,
  count: 0,
};

// reducer定義
useModule
  .reducer(initialState)
  .on(CounterActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });

export default function CounterModule() {
  // epicとreducerをロード
  useModule();

  return Counter;
}
