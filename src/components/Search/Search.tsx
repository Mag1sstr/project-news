import { Link, useNavigate } from "react-router-dom";
import { setSearchValue } from "../../store/searchSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from "./Search.module.css";

export default function Search() {
  const { searchValue } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            searchValue.trim().length && navigate(`/search/${searchValue}`);
          }
        }}
        className={styles.input}
        type="text"
        placeholder="Search..."
      />

      <img
        onClick={() =>
          searchValue.trim().length && navigate(`/search/${searchValue}`)
        }
        className={styles.img}
        src="https://tengrinews.kz/tengri_new/img/menu-search.svg"
        alt=""
      />
    </div>
  );
}
