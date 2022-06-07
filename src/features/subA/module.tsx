import React from "react";
import { SubAView } from "./components/SubAView";
import { SubAActions, SubAState, useModule } from "./interface";

const initialState: SubAState = {
  counter: 0,
};

useModule.reducer(initialState).on(SubAActions.increase, (state) => {
  state.counter++;
});

export default function SubAModule() {
  useModule();

  return <SubAView />;
}
