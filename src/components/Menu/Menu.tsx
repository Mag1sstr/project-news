import styles from "./Menu.module.css";
import logo from "../../images/logo.png";

function Menu() {
  return (
    <div className={styles.logo}>
      <div className={styles.item}>
        <img src={logo} alt="" />
        <span>WORLD</span> NEWS
      </div>
    </div>
  );
}

export default Menu;
