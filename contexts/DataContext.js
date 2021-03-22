import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);

  const handleSubmitSearch = () => {
      console.log('vamo de submit caralho');
    //   aqui vai ter que ter um filter ou find do que foi recebido, será comparado com os dados dos planetas e retornados os que tiverem os caractétes¸
  }

  const refreshData = async () => {
    try {
      const res = await fetch("./api.hello");
      const latestData = await res.json();
      setData(latestData);
    } catch (err) {
      console.error(err);
    }
  };

  const saudacao = () => {
    console.log("Oi, vim do provider");
  };
  return (
    <DataContext.Provider value={{ saudacao, message, setMessage , handleSubmitSearch}}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
// tu basicamente coloca aqui as funçōes que serão exportadas e o que elas fazem com os dados