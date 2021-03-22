import { useEffect, useState } from "react";
import { format } from "date-fns";
import mock from "../../db/planets.mock.json";

export default function Table({ props }) {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch(
  //       "https://swapi-trybe.herokuapp.com/api/planets/",
  //     );
  //     const lista = await response.json();
  //   }
  //   loadData();
  // }, []);

  useEffect(() => {
    const vai = mock.map((ind) => {
      delete ind.residents;
      return ind;
    });
    setData(vai);
  }, []);

  // const getName = (peapa) => {
  //   return (
  //     {
  //       name: "Nome",
  //       rotation_period: "ola",
  //     }[peapa] || "404"
  //   );
  // };

  // console.log("data :>> ", data);

  // const getMovies = async (film) => {
  //   const response = await fetch(film[0]).then((res) => {
  //     console.log("res :>> ", res);
  //     return res
  //   });
  //   console.log("responsiiii :>> ", response);
  //   return response;
  // };

  // useEffect(() => {
  //   getMovies("https://swapi-trybe.herokuapp.com/api/people/5/")
  // },[])

  return (
    <div>
      tabela
      {/* {data.map((item, index) => {
        console.log("item :>> ", item);
        for (let prop in item) {
          console.log("prop :>> ", item[prop]);
          return (
            <div key={index}>
              <h1>{getName(prop)}</h1>
            </div>
          );
        }
      })} */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet, index) => (
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
              {/* <td>{getMovies(planet.films) || "N/A"}</td> */}
              <td>{"N/A"}</td>
              <td>{format(new Date(planet.created), "dd/MM/yyyy")}</td>
              <td>{format(new Date(planet.edited), "dd/MM/yyyy")}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
