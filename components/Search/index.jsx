import styles from "../../styles/Search.module.scss";

import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

export default function Search() {
  const { search, handleSearchChange } = useContext(DataContext);

  return (
    <form className="search">
      <input
        className={styles.input}
        name="query"
        type="search"
        placeholder="Digite sua busca..."
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}
