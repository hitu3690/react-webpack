import React from "react";
import { useActions } from "typeless";
import { CounterExtendActions, getCounterExtendState } from "../interface";

export const CounterExtendView = () => {
  const { incrementNTimes, incrementThreeTimes } =
    useActions(CounterExtendActions);
  const { count } = getCounterExtendState.useState();
  return (
    <>
      <div>{count}</div>
      <button onClick={() => incrementNTimes(5)}>+5</button>
      <button onClick={incrementThreeTimes}>+3</button>
    </>
  );
};
