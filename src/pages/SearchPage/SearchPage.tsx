import { useGetSearchNewsQuery } from "../../api/apiNews/apiNews";
import NewsCard from "../../components/NewsCard/NewsCard";
import styles from "./SearchPage.module.css";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { value } = useParams();
  const { data } = useGetSearchNewsQuery(value!);
  console.log(data);

  return (
    <section className={styles.search}>
      <div className="conteiner">
        <div className={styles.inner}>
          <h1 className={styles.title}>
            {value && value[0].toUpperCase() + value?.slice(1)}
          </h1>
          <p className={styles.text}>{data?.articles.length} results found</p>
          <div className={styles.row}>
            {data?.articles.map((item) => (
              <NewsCard key={item.content} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
