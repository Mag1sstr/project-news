import { useState } from "react";
import styles from "./Widget.module.css";
import {
  useGetLatestNewsQuery,
  useGetPopularNewsQuery,
} from "../../api/apiNews/apiNews";
import WidgetCard from "../WidgetCard/WidgetCard";

export default function Widget() {
  const [tab, setTab] = useState("latest");
  const { data: popular } = useGetPopularNewsQuery([]);
  const { data: latest } = useGetLatestNewsQuery([]);
  // console.log(data);

  return (
    <div className={styles.widget}>
      <div className={styles.tab}>
        <button
          onClick={() => setTab("popular")}
          className={`${styles.tab__btn} ${tab === "popular" && styles.active}`}
        >
          Popular
        </button>
        <button
          onClick={() => setTab("latest")}
          className={`${styles.tab__btn} ${tab === "latest" && styles.active}`}
        >
          Latest
        </button>
      </div>
      <div className={styles.content}>
        {tab === "popular" && (
          <>
            {popular?.articles.map((item) => {
              return <WidgetCard key={item.url} {...item} />;
            })}
          </>
        )}
        {tab === "latest" && (
          <>
            {latest?.articles.map((item) => {
              return <WidgetCard key={item.url} {...item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
