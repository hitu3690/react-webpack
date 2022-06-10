import { createModule } from "typeless";
import { CatSymbol } from "./symbol";

export const [useModule, CatActions, getCatState] = createModule(CatSymbol)
  .withActions({
    startLoadToCat: null,
    cancelLoadToCat: null,
    succeedLoadToCat: (cat: Cat) => ({ payload: { cat } }),
    occersError: (error: string) => ({ payload: { error } }),
  })
  .withState<CatState>();

type ViewType = "loading" | "details" | "error";

interface Cat {
  imgUrl: string;
}

export interface CatState {
  viewType: ViewType;
  cat: Cat | null;
  error: string;
}
