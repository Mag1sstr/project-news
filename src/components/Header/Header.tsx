import styles from "./Header.module.css";
import { useCurrencies } from "../../hooks/useCurrencies";
import Clock from "../Clock/Clock";

export default function Header() {
  // const { data, isLoading } = useCurrencies();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // console.log(data);

  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.row}>
          <nav>
            <ul className={styles.links}>
              <li className={styles.link}>News</li>
              <li className={styles.link}>Life</li>
              <li className={styles.link}>Sport</li>
              <li className={styles.link}>Auto</li>
            </ul>
          </nav>

          <div className={styles.curr}>
            {/* {data!.map(({ name, price, img }) => (
              <div className={styles.item}>
                <img className={styles.icon} src={img} alt={name} />
                {price}
              </div>
            ))} */}
          </div>
          <Clock />
        </div>
      </div>
    </header>
  );
}
