import React from "react";
import axios from "axios";
import { delay, from, mergeMap } from "typeless/rx";
import * as Rx from "typeless/rx";

import NewsHeaderView from "./components/NewsHeaderView";
import { NewsActions, NewsState, useNewsModule } from "./interface";
import { convertToNewsState } from "../../utils/services/getter";
import { CardNews, HeaderNews } from "models/News";

/** epic */
useNewsModule.epic().on(NewsActions.startLoadToNews, () => {
  return from(axios.get("/rss")).pipe(
    delay(200),
    Rx.map(({ data }) => {
      const newState = convertToNewsState(data);
      return NewsActions.setNewsState(newState);
    })
  );
});

/** reducer */
const initialState: NewsState = {
  headerNews: [] as HeaderNews[],
  cardNews: [] as CardNews[],
};
useNewsModule
  .reducer(initialState)
  .on(NewsActions.setNewsState, (state, { news: { cardNews, headerNews } }) => {
    state.cardNews = cardNews;
    state.headerNews = headerNews;
  });

export default function NewsModule() {
  useNewsModule();

  return <NewsHeaderView />;
}
