import styles from "./LatestNews.module.css";

function LatestNews() {
  return (
    <section className={styles.latest}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.main__image}>
            <img
              src="https://static.tengrinews.kz/userdata/news/2025/news_565794/thumb_b/photo_506028.jpeg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.widget}></div>
    </section>
  );
}

export default LatestNews;
