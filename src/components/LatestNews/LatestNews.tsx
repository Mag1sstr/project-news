import {
  // getLatestNews,
  useGetLatestNewsQuery,
} from "../../api/apiNews/apiNews";
import { useFetch } from "../../hooks/useFetch";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./LatestNews.module.css";
import { INews } from "../../interfaces/interfaces";
import { useState } from "react";
import Widget from "../Widget/Widget";
import { formatDate } from "../../helpers/formatDate";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery([]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className={styles.latest}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.main__image}>
            <img
              src={data?.articles[0].urlToImage}
              alt={data?.articles[0].urlToImage}
            />
            <div className={styles.main__info}>
              <p className={styles.main__title}>{data?.articles[0].title}</p>
              <p className={styles.main__item}>
                {formatDate(data?.articles[0].publishedAt!)}
              </p>
            </div>
          </div>
          <div className={styles.cards}>
            {data?.articles.slice(1, 7).map((item) => (
              <NewsCard key={item.content} {...item} />
            ))}
          </div>
        </div>
        <Widget />
      </div>
    </section>
  );
}

export default LatestNews;
