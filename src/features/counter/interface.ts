import { createModule } from "typeless";
import { CounterSymbol } from "./symbol";

export interface CounterState {
  isLoading: boolean;
  count: number;
}

export const [useModule, CounterActions, getCounterState] = createModule(
  CounterSymbol
)
  .withActions({
    increment: null,
    decrement: null,
    reset: null,
    alertCount: null,
    startCount: null,
    doneCount: (count: number) => ({ payload: { count } }),
  })
  .withState<CounterState>();
