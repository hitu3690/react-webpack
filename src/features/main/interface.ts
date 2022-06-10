import { createModule } from "typeless";
import { MainSymbol, ViewType, MainState } from "./symbol";

export const [useModule, MainActions, getMainState] = createModule(MainSymbol)
  .withActions({
    showContent: (viewType: ViewType) => ({ payload: { viewType } }),
  })
  .withState<MainState>();
