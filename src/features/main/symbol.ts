export const MainSymbol = Symbol("main");

export type ViewType = "subA" | "subB" | "subC";

export interface MainState {
  viewType: ViewType | null;
}
