import { useContext } from "react";

import DataContext from "../../contexts/DataContext";
import { columnsList, comparisonsList } from "../../constants";

import * as S from "./styles";

export default function Filter() {
  const {
    handleSelectColumn,
    handleSelectComparison,
    value,
    handleChangeValue,
    handleSubmit,
  } = useContext(DataContext);

  return (
    <S.Content>
      <S.StyledSelect name="column" onChange={handleSelectColumn}>
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {columnsList.map((column) => (
          <option key={column.value} value={column.value}>
            {column.name}
          </option>
        ))}
      </S.StyledSelect>

      <S.StyledSelect name="operator" onChange={handleSelectComparison}>
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {comparisonsList.map((comparison) => (
          <option key={comparison.value} value={comparison.value}>
            {comparison.name}
          </option>
        ))}
      </S.StyledSelect>

      <S.StyledInput
        type="number"
        placeholder="Insira um valor numérico"
        value={value}
        onChange={handleChangeValue}
      />
      <S.StyledButton type="submit" onClick={handleSubmit}>
        Aplicar
      </S.StyledButton>
    </S.Content>
  );
}
