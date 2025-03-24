import styles from "./Home.module.css";
import LatestNews from "../LatestNews/LatestNews";
import Menu from "../Menu/Menu";
export default function Home() {
  return (
    <section>
      <div className="conteiner">
        <Menu />
        <LatestNews />
      </div>
    </section>
  );
}
