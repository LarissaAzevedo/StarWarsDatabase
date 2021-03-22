import { useState } from "react";

export default function Filter({ props }) {
  const optionsList = [
    { value: "population", name: "População" },
    { value: "orbital_period", name: "Tempo Orbital" },
    { value: "diameter", name: "Diâmetro" },
    { value: "rotation_period", name: "Tempo de Rotação" },
    { value: "surface_water", name: "Água da Superfície" },
  ];
  const operator = [
    { value: "more_than", name: "maior que" },
    { value: "less_than", name: "menor que" },
    { value: "equal", name: "igual" },
  ];

  const [option, setOption] = useState("");
  const [op, setOp] = useState("");
  const [param, setParam] = useState(0);

  const handleChangeValue = (value) => {
    setParam(value);
  };

  const handleSubmit = () => {
    console.log("Deve aplicar os filtros");
  };

  console.log('props :>> ', props);

  return (
    <div className="filters">
      <select name="param">
        {optionsList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <select name="operator">
        {operator.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <input type="number" value={param} onChange={handleChangeValue} />
      <button type="submit" onClick={handleSubmit}>
        Aplicar
      </button>
    </div>
  );
}
