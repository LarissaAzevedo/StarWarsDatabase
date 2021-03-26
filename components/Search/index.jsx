import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

export default function Search() {
  const { search, handleSearchChange } = useContext(DataContext);

  return (
    <form className="search">
      <input
        name="query"
        type="search"
        placeholder="Busque por..."
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}
