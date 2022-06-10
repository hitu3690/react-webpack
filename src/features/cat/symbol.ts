export const CatSymbol = Symbol("cat");

export interface CounterState {
  isLoading: boolean;
  count: number;
}

export type ViewType = "loading" | "details" | "error";

export interface Cat {
  imageUrl: string;
}

export interface CatState {
  viewType: ViewType;
  cat: Cat | null;
  error: string;
}
