import { useContext } from "react";
import { format } from "date-fns";

import { headerTableList } from "../../constants";

import DataContext from "../../contexts/DataContext";

import * as S from "./styles";

export default function Table() {
  const { planets, search } = useContext(DataContext);
  return (
    <div>
      <S.StyledTable>
        <S.StyledThead>
          <S.StyledTr>
            {headerTableList.map((title) => (
              <S.StyledTh key={title.name}>{title.name}</S.StyledTh>
            ))}
          </S.StyledTr>
        </S.StyledThead>
        <S.StyledTbody>
          {planets
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((planet, index) => (
              <tr key={index}>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                {/* <td>{getMovies(planet.films)}</td> */}
                <td>{"N/A"}</td>
                <td>{format(new Date(planet.created), "dd/MM/yyyy")}</td>
                <td>{format(new Date(planet.edited), "dd/MM/yyyy")}</td>
                <td>
                  <a
                    href={planet.url}
                    alt="Link que redireciona para a página do endpoint"
                  >
                    Endpoint
                  </a>
                </td>
              </tr>
            ))}
        </S.StyledTbody>
      </S.StyledTable>
    </div>
  );
}
