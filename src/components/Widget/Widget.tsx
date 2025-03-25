import { useState } from "react";
import styles from "./Widget.module.css";
import { useGetPopularNewsQuery } from "../../api/apiNews/apiNews";

export default function Widget() {
  const [tab, setTab] = useState("popular");
  const { data, isLoading } = useGetPopularNewsQuery([]);
  console.log(data);

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
        {data?.articles.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
