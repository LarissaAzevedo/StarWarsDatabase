import styles from "../../styles/FilterResume.module.scss";

import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

export default function FilterResume() {
  const { filterList, handleRemoveFilter } = useContext(DataContext);

  const getColumnName = (column) => {
    if (column === "population") {
      return "População";
    }
    if (column === "orbital_period") {
      return "Tempo Orbital";
    }
    if (column === "diameter") {
      return "Diâmetro";
    }
    if (column === "rotation_period") {
      return "Tempo de Rotação";
    }
    if (column === "surface_water") {
      return "Água da Superfície";
    }
  };
  const getComparison = (comparison) => {
    if (comparison === "more_than") {
      return "maior que";
    }
    if (comparison === "less_than") {
      return "menor que";
    }
    if (comparison === "equal") {
      return "igual";
    }
  };

  return (
    <div>
      {filterList &&
        filterList.map((filt) => (
          <div
            className={styles.filters_list}
            key={filt.column}
            id={filt.column}
          >
            <span className={styles.filter_line}>
              {getColumnName(filt.column)} | {getComparison(filt.comparison)} |{" "}
              {filt.value}
            </span>
            <button
              className={styles.button}
              onClick={() => handleRemoveFilter(filt.column)}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}
