import React from "react";
import * as Rx from "typeless/rx";
import { useModule, CatState, CatActions } from "./interface";
import { CatView } from "./components/CatView";

function fetchCatData() {
  return Rx.of({
    imgUrl: `https://cataas.com/cat/gif?_t=${Date.now()}`,
  }).pipe(
    Rx.delay(2000),
    Rx.map((cat) => {
      if (Date.now() % 2 === 0) {
        throw new Error("Failed to load cat");
      }
      return cat;
    })
  );
}

useModule.epic().on(CatActions.startLoadToCat, (_, { action$ }) =>
  fetchCatData().pipe(
    Rx.map((cat) => CatActions.succeedLoadToCat(cat)),
    Rx.catchError((err) => {
      console.error(err);
      return Rx.of(CatActions.occersError(err.message));
    }),
    Rx.takeUntil(action$.pipe(Rx.waitForType(CatActions.cancelLoadToCat)))
  )
);

const initialState: CatState = {
  viewType: "details",
  cat: null,
  error: "",
};

useModule
  .reducer(initialState)
  .on(CatActions.startLoadToCat, (state) => {
    state.viewType = "loading";
  })
  .on(CatActions.occersError, (state, { error }) => {
    state.cat = null;
    state.viewType = "error";
    state.error = error;
  })
  .on(CatActions.succeedLoadToCat, (state, { cat }) => {
    state.viewType = "details";
    state.cat = cat;
  })
  .on(CatActions.cancelLoadToCat, (state) => {
    state.viewType = "details";
  });

export default function CatModule() {
  useModule();

  return <CatView />;
}
