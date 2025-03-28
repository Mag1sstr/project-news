import { formatDate } from "../../helpers/formatDate";
import { INews } from "../../interfaces/interfaces";
import styles from "./NewsCard.module.css";

function NewsCard({ title, urlToImage, publishedAt, url }: INews) {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank">
        <div className={styles.wrapper}>
          <img className={styles.img} src={urlToImage} alt={urlToImage} />
        </div>
        <p className={styles.title}>{title}</p>
      </a>
      <div className={styles.info}>
        <p className={styles.item}>{formatDate(publishedAt)}</p>
        <p className={styles.item}></p>
        <p className={styles.item}></p>
      </div>
    </div>
  );
}

export default NewsCard;
