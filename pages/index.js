import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import Search from "../components/Search";
import Filter from "../components/Filter";
// import { saudacao } from "../contexts/DataContext";
import { useContext, useEffect, useState } from "react";
import { DataProvider, DataContext } from "../contexts/DataContext";

// const { message, setMessage, saudacao } = useState();
// const { saudacao } = useContext(DataContext);
// useEffect(() => {
//   saudacao();
// }, []);

export default function Home(props) {
  return (
    <DataProvider>
      <div className={styles.container}>
        <Search />
        <Filter handleSubmit={handleSubmitSearch}/>
        <Table />
      </div>
    </DataProvider>
  );
}
