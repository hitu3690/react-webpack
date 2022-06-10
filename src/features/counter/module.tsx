import React from "react";
import * as Rx from "typeless/rx";
import {
  CounterActions,
  CounterState,
  getCounterState,
  useModule,
} from "./interface";
import { delay } from "typeless/rx";
import { Counter } from "./components/CounterView";

// epic定義
useModule
  .epic()
  .on(CounterActions.startCount, () =>
    Rx.of(CounterActions.doneCount(1)).pipe(delay(1000))
  )
  .on(CounterActions.reset, () =>
    Rx.of(CounterActions.alertCount()).pipe(delay(1000))
  );

// reducer定義
const initialState: CounterState = {
  isLoading: false,
  count: 0,
};
useModule
  .reducer(initialState)
  .on(CounterActions.increment, (state) => {
    state.count++;
  })
  .on(CounterActions.decrement, (state) => {
    state.count--;
  })
  .on(CounterActions.reset, (state) => {
    return { ...state, count: 0 };
  })
  .on(CounterActions.alertCount, (state) => {
    alert(`${state.count}`);
  })
  .on(CounterActions.startCount, (state) => {
    state.isLoading = true;
  })
  .on(CounterActions.doneCount, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });

export default function CounterModule() {
  useModule();

  return <Counter />;
}
