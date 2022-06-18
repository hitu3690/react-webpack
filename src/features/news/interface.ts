// @ts-ignore
import { createModule } from "typeless";
import { NewsSymbol } from "./symbol";

export interface HeaderNews {
  date: string;
  title: string;
  path: string;
}

export interface CardNews extends HeaderNews {
  description: string;
  thumbnail: string;
}

/** State */
export type NewsState = {
  headerNews: HeaderNews[];
  cardNews: CardNews[];
};

/** Module */
export const [useNewsModule, NewsActions, getNewsState] = createModule(
  NewsSymbol
)
  .withActions({
    startLoadToNews: null,
    setNewsState: (news: NewsState) => ({ payload: { news } }),
  })
  .withState<NewsState>();
