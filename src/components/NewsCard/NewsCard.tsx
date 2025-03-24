import styles from "./NewsCard.module.css";

function NewsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src="https://static.tengrinews.kz/userdata/news/2025/news_565845/thumb_xms/photo_506087.jpg.webp"
          alt=""
        />
      </div>
      <p className={styles.title}>
        О возможных разливах и подтоплениях предупредили жителей трех областей
      </p>
      <div className={styles.info}>
        <p className={styles.item}>Сегодня, 02:50</p>
        <p className={styles.item}></p>
        <p className={styles.item}></p>
      </div>
    </div>
  );
}

export default NewsCard;
