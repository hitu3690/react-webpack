import React from "react";
import { SubBView } from "./components/SubBView";
import { SubBActions, SubBState, useModule } from "./interface";

const initialState: SubBState = {
  counter: 0,
};

useModule
  .reducer(initialState)
  .on(SubBActions.decrease, (state) => {
    state.counter--;
  })
  .on(SubBActions.$unmounting, (state) => {
    state.counter = 0;
  });

export default function SubBModule() {
  useModule();

  return <SubBView />;
}
