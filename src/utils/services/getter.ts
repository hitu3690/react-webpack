import xml2 from "xml2js";
import moment from "moment";
import { CardNews, HeaderNews, NewsState } from "../../features/news/interface";

export const convertToNewsState = (data: any): NewsState => {
  let parsedXmlToJson: any[];
  let headerNews: HeaderNews[] = [];
  let cardNews: CardNews[] = [];
  xml2.parseString(data, (_, resXml) => {
    parsedXmlToJson = resXml.rss.channel[0].item;
    parsedXmlToJson.forEach((data) => {
      const title = data.title[0];
      const date = moment(data.pubDate[0]).format("YYYY/MM/DD");
      const path = data.link[0];
      const description = data.description[0];
      const thumbnail = getThumbnails(data["media:thumbnail"][0].$.url);
      headerNews.push({
        title,
        date,
        path,
      });
      cardNews.push({
        title,
        date,
        path,
        description,
        thumbnail,
      });
    });
    headerNews = headerNews.reverse().slice(0, 3);
    cardNews = cardNews.reverse();
  });
  return { headerNews, cardNews };
};

export const getThumbnails = (data: string): any => {
  // eslint-disable-next-line prefer-const
  let thumbnails = data.match(/https(.|\s)*?(jpg|png|gif|jpeg)/gi);
  return thumbnails !== null && thumbnails !== undefined
    ? Object.values(thumbnails)
    : false;
};
