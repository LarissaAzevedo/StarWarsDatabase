import DataContext from "../contexts/DataContext";

import { useState, useEffect } from "react";

function ContextWrapper({ children }) {
  const [planets, setPlanets] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  const getData = async () => {
    const response = await fetch(
      "https://swapi-trybe.herokuapp.com/api/planets/"
    );
    const data = await response.json();

    const aux = data.results.map((ind) => {
      delete ind.residents;
      return ind;
    });

    setPlanets(aux);
    // getMovies()
  };
  //#region Get Movies Function
  // const getMovies = (endpoint) => {
  //   let moviesList = [];

  //   const epa = endpoint.map(async (endp) => {
  //     const response = await fetch(endp);
  //     const data = await response.json();

  //     console.log(`data`, data.title);

  //     moviesList = [...moviesList, data.title];

  //     console.log(`moviesList >>>>>>>>>>>>>>`, moviesList);
  //     // setMovies(moviesList);
  //     // return moviesList
  //   });
  // };
  //#endregion

  //#region Search Functions
  const handleSearchChange = async (value) => {

    const filtered = planets.filter((planet) => {
      return planet.name
        .toLowerCase()
        .includes(value.target.value.toLowerCase());
    });

    setSearch(value.target.value);
    setFiltered(filtered);
  };

  //#endregion

  //#region Filter Box Functions
  const handleSelectColumn = (selectedColumn) => {
    setColumn(selectedColumn.target.value);
  };

  const handleSelectComparison = (selectedComparison) => {
    setComparison(selectedComparison.target.value);
  };

  const handleChangeValue = (numberValue) => {
    setValue(numberValue.target.value);
  };

  const handleSubmit = () => {
    if (
      column === undefined ||
      comparison === undefined ||
      value === undefined ||
      value === "0"
    ) {
      return alert(
        "Preencha as 3 lacunas para filtrar e certifique-se de comparar um valor maior que 0"
      );
    }
    console.log(`column`, column);
    console.log(`comparison`, comparison);
    console.log(`value`, value);
    // deve remover os valores (dropdown) selecionados da listagem
    // deve renderizar em tela o filtro aplicado com possibilidade de exclusão
    // deve fazer a filtragem na tabela de dados
  };
  //#endregion

  // Att
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(`movies`, movies);
  }, [movies]);

  return (
    <DataContext.Provider
      value={{
        planets,
        filtered,
        search,
        value,
        movies,
        handleSubmit,
        handleSearchChange,
        handleSelectColumn,
        handleSelectComparison,
        handleChangeValue,
        // getMovies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default ContextWrapper;
