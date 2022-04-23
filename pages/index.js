import Table from "../components/Table";
import Search from "../components/Search";
import Filter from "../components/Filter";
import FilterResume from "../components/FilterResume";

import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <Search />
      <Filter />
      <FilterResume />
      <Table />
    </S.Container>
  );
}
