import { createModule } from "typeless";
import { MainSymbol } from "./symbol";

export const [useModule, MainActions, getMainState] = createModule(MainSymbol)
  .withActions({
    showContent: (viewType: ViewType) => ({ payload: { viewType } }),
  })
  .withState<MainState>();

export type ViewType = "counter" | "cat" | "counterExtend";

export interface MainState {
  viewType: ViewType | null;
}
