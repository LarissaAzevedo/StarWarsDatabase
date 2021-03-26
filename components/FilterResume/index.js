import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

export default function FilterResume() {
  const { filterList, handleRemoveFilter } = useContext(DataContext);

  return (
    <div className="filters-list">
      {filterList && filterList.map((filt) => (
        <div key={filt.column} id={filt.column}>
          {filt.column} | {filt.comparison} | {filt.value}
          <button onClick={()=> handleRemoveFilter(filt.column)}>X</button>
        </div>
      ))}
    </div>
  );
}
