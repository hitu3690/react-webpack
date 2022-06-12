import { createModule } from "typeless";
import { CounterExtendSymbol } from "./symbol";

export interface CounterExtendState {
  count: number;
}

export const [useModule, CounterExtendActions, getCounterExtendState] =
  createModule(CounterExtendSymbol)
    .withActions({
      increment: null,
      incrementNTimes: (n: number) => ({ payload: { n } }),
      incrementThreeTimes: null,
    })
    .withState<CounterExtendState>();
