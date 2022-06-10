import React from "react";
import * as Rx from "typeless/rx";
import { CatView } from "./components/CatView";
import { CatActions, useModule } from "./interface";
import { CatState } from "./symbol";

/** epic */
const fetchCat = () => {
  return Rx.of({
    imageUrl: `https://cataas.com/cat/gif?_t=${Date.now()}`,
  }).pipe(
    Rx.delay(2000),
    Rx.map((cat) => {
      if (Date.now() % 2 === 0) {
        throw new Error("failed to load cat");
      }
      return cat;
    })
  );
};
useModule.epic().on(CatActions.load, (_, { action$ }) =>
  fetchCat().pipe(
    Rx.map((cat) => CatActions.catLoaded(cat)),
    Rx.catchError((err) => {
      console.error(err);
      return Rx.of(CatActions.errorOcurred(err.message));
    }),
    Rx.takeUntil(action$.pipe(Rx.waitForType(CatActions.cancel)))
  )
);

/** reducer */
const initialState: CatState = {
  viewType: "details",
  cat: null,
  error: "",
};
useModule
  .reducer(initialState)
  .on(CatActions.load, (state) => {
    state.viewType = "loading";
  })
  .on(CatActions.cancel, (state) => {
    state.viewType = "details";
  })
  .on(CatActions.catLoaded, (state, { cat }) => {
    state.cat = cat;
    state.viewType = "details";
  })
  .on(CatActions.errorOcurred, (state, { error }) => {
    state.cat = null;
    state.viewType = "error";
    state.error = error;
  });

export default function CatModule() {
  useModule();

  return <CatView />;
}
