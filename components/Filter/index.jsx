import styles from "../../styles/Filter.module.scss";

import { useContext } from "react";

import DataContext from "../../contexts/DataContext";
import { columnsList, comparisonsList } from "../../constants";

export default function Filter() {
  const {
    handleSelectColumn,
    handleSelectComparison,
    value,
    handleChangeValue,
    handleSubmit,
  } = useContext(DataContext);

  return (
    <div className={styles.content}>
      <select
        className={styles.select}
        name="column"
        onChange={handleSelectColumn}
      >
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {columnsList.map((column) => (
          <option key={column.value} value={column.value}>
            {column.name}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        name="operator"
        onChange={handleSelectComparison}
      >
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {comparisonsList.map((comparison) => (
          <option key={comparison.value} value={comparison.value}>
            {comparison.name}
          </option>
        ))}
      </select>

      <input
        className={styles.input}
        type="number"
        placeholder="Insira um valor numérico"
        value={value}
        onChange={handleChangeValue}
      />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Aplicar
      </button>
    </div>
  );
}
