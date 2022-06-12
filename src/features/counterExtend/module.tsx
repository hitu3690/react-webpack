import React from "react";
import { CounterExtendView } from "./components/CounterExtendView";
import { CounterExtendActions, useModule } from "./interface";

// epic
export const epic = useModule.epic();
epic
  .on(CounterExtendActions.incrementThreeTimes, () => {
    return [
      CounterExtendActions.increment(),
      CounterExtendActions.increment(),
      CounterExtendActions.increment(),
    ];
  })
  .on(CounterExtendActions.incrementNTimes, ({ n }: { n: number }) => {
    return new Array(n).fill(CounterExtendActions.increment());
  });

// reducer
const initialState = {
  count: 0,
};
export const reducer = useModule
  .reducer(initialState)
  .on(CounterExtendActions.increment, (state) => {
    state.count++;
  });

export default function CounterExtendModule() {
  useModule();

  return <CounterExtendView />;
}
