import React, { useState } from "react";
import axios from "axios";
import Grid from "../Grid/Grid";

const Search = () => {
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [cliente, setCliente] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = async () => {
    try {
      const params = {
        dataInicial,
        dataFinal,
        cliente,
        vendedor,
      };

      const res = await axios.get("http://localhost:8800/pesquisa", { params });

      setFilteredData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-container">
      <div className="filter">
        <label>Data Inicial:</label>
        <input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} />

        <label>Data Final:</label>
        <input type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />

        <label>Cliente:</label>
        <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} />

        <label>Vendedor:</label>
        <input type="text" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />

        <button onClick={handleFilter}>Pesquisar</button>
      </div>

      <Grid users={filteredData} />
    </div>
  );
};

export default Search;
