import styles from "./Menu.module.css";
import logo from "../../images/logo.png";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="conteiner">
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.item}>
            <img src={logo} alt="" />
            <span>WORLD</span> NEWS
          </div>
        </Link>
        <Search />
      </div>
    </div>
  );
}

export default Menu;
