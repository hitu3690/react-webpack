import { createModule } from "typeless";
import { Cat, CatState, CatSymbol } from "./symbol";

export const [useModule, CatActions, getCatState] = createModule(CatSymbol)
  .withActions({
    load: null,
    cancel: null,
    catLoaded: (cat: Cat) => ({ payload: { cat } }),
    errorOcurred: (error: string) => ({ payload: { error } }),
  })
  .withState<CatState>();
