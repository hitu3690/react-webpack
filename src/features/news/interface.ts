// @ts-ignore
import { HeaderNews, CardNews } from "models/News";
import { createModule } from "typeless";
import { NewsSymbol } from "./symbol";

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
