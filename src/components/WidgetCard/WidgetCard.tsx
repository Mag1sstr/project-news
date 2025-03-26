import { formatDate } from "../../helpers/formatDate";
import { INews } from "../../interfaces/interfaces";
import styles from "./WidgetCard.module.css";

function WidgetCard({ title, publishedAt }: INews) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.info}>{formatDate(publishedAt)}</p>
    </div>
  );
}

export default WidgetCard;
