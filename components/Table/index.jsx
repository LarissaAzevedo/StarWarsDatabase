import { useContext } from "react";
import { format } from "date-fns";

import { headerTableList } from "../../constants";

import DataContext from "../../contexts/DataContext";

export default function Table() {
  const { planets, search } = useContext(DataContext);
  console.log("headerTableList :>> ", headerTableList);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerTableList.map((title) => (
              <th key={title.name}>{title.name}</th>
            ))}
            {/* <th>Nome</th>
            <th>Tempo de Rotação</th>
            <th>Tempo Orbital</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Terreno</th>
            <th>Água da Superfície</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Criação</th>
            <th>Edição</th>
            <th>URL</th> */}
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}
