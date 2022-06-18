import React, { useEffect } from "react";
// @ts-ignore
import { useActions } from "typeless";
import { getNewsState, NewsActions } from "../interface";
import "../../../assets/styles/NewsHeader.scss";

const NewsHeaderView = () => {
  const { startLoadToNews } = useActions(NewsActions);
  const { headerNews } = getNewsState.useState();

  useEffect(() => {
    startLoadToNews();
  }, []);

  const newsHeader = headerNews.map((item, idx) => {
    return (
      <li key={idx} onClick={() => window.open(item.path, "_blank")}>
        <span>{item.date}</span>
        <span>{item.title}</span>
      </li>
    );
  });
  return (
    <div className="newsHeader">
      <div className="newsHeader__title">最新情報</div>
      <ul className="newsHeader__items">{newsHeader}</ul>
    </div>
  );
};

export default NewsHeaderView;
