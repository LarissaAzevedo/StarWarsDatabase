import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

import * as S from "./styles";

export default function Search() {
  const { search, handleSearchChange } = useContext(DataContext);

  return (
    <form className="search">
      <S.StyledInput
        name="query"
        type="search"
        placeholder="Digite sua busca..."
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}
