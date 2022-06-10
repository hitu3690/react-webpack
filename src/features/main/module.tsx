import React from "react";
import { MainView } from "./components/MainView";
import { useModule, MainActions, MainState } from "./interface";

const initialState: MainState = {
  viewType: null,
};

useModule
  .reducer(initialState)
  .on(MainActions.showContent, (state, { viewType }) => {
    state.viewType = viewType;
  });

export default function MainModule() {
  useModule();

  return <MainView />;
}
