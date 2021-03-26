import DataContext from "../contexts/DataContext";

import { useState, useEffect } from "react";
import { arMA } from "date-fns/locale";

function ContextWrapper({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [filterList, setFilterList] = useState([]);

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
  const handleRemoveFilter = (value) => {
    function aux(object, value) {
      Object.keys(object).find((key) => key === value);
    }

    const res = filterList.filter((item) => {
      if (item.column === "population") {
        return item;
      }

      if (item.column === "orbital_period") {
        return item;
      }

      if (item.column === "diameter") {
        return item;
      }

      if (item.column === "rotation_period") {
        return item;
      }

      if (item.column === "surface_water") {
        return item;
      }
    });

    const newFilterList = filterList.filter(function (e) {
      return e.column !== res[0].column;
    });

    setFilterList(newFilterList);
  };

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

    function aux(object, value) {
      Object.keys(object).find((key) => key === value);
    }

    const res = planets.filter((item) => {
      if (
        comparison === "equal" &&
        item[column] === value &&
        item[column] !== "unknown"
      ) {
        return item;
      }
      if (
        comparison === "more_than" &&
        item[column] > value &&
        item[column] !== "unknown"
      ) {
        return item;
      }
      if (
        comparison === "less_than" &&
        item[column] < value &&
        item[column] !== "unknown"
      ) {
        return item;
      }
    });

    setPlanets(res);
    setFilterList(filterList.concat({ column, comparison, value }));
  };
  //#endregion

  // Att
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(`filterList`, filterList);
  }, [filterList]);

  return (
    <DataContext.Provider
      value={{
        planets,
        filtered,
        filterList,
        search,
        column,
        comparison,
        value,
        handleSubmit,
        handleSearchChange,
        handleSelectColumn,
        handleSelectComparison,
        handleChangeValue,
        handleRemoveFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default ContextWrapper;
