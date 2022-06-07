import { MainActions, MainState, useModule } from "./interface";
import { MainView } from "./components/MainView";
import React from "react";

const initialState: MainState = {
  viewType: null,
};

useModule.reducer(initialState).on(MainActions.show, (state, { viewType }) => {
  state.viewType = viewType;
});

export const MainModule: React.FC = () => {
  useModule();

  return <MainView />;
};
