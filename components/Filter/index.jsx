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
    <div>
      <select name="column" onChange={handleSelectColumn}>
        {columnsList.map((column) => (
          <option key={column.value} value={column.value}>
            {column.name}
          </option>
        ))}
      </select>

      <select name="operator" onChange={handleSelectComparison}>
        {comparisonsList.map((comparison) => (
          <option key={comparison.value} value={comparison.value}>
            {comparison.name}
          </option>
        ))}
      </select>

      <input type="number" value={value} onChange={handleChangeValue} />
      <button type="submit" onClick={handleSubmit}>
        Aplicar
      </button>
    </div>
  );
}
