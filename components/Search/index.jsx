import { useState } from "react";

export default function Search({ handleSubmit }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value.target.value);
  };
  // const handleSubmit = (e) => {
  //   console.log("sei lá");
  // };
  return (
    <input
      type="search"
      placeholder="Busque por..."
      value={search}
      onChange={handleSearchChange}
      onSubmit={handleSubmit}
    />
  );
}
