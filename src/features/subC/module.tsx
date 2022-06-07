import React from "react";
import { SubCView } from "./components/SubCView";
import { SubCActions, SubCState, useModule } from "./interface";

const initialState: SubCState = {
  counter: 1,
};

useModule.reducer(initialState).on(SubCActions.double, (state) => {
  state.counter *= 2;
});

export default function SubCModule() {
  useModule();

  return <SubCView />;
}
