import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import Search from "../components/Search";
import Filter from "../components/Filter";
import FilterResume from "../components/FilterResume";

export default function Home() {
  return (
    <div className={styles.container}>
      <Search />
      <Filter />
      <FilterResume />
      <Table />
    </div>
  );
}
