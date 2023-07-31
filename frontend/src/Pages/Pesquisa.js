import React, { useState } from "react";
import axios from "axios";
import Grid from "../components/Grid/Grid";
import "./pesquisa.css";

const Pesquisa = ({ setOnEdit }) => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState({
    startDate: "",
    endDate: "",
    cliente: "",
    vendedor: "",
  });

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      console.log("Critérios de pesquisa:", searchData); 
      const res = await axios.get("http://localhost:8800/pesquisa", {
        params: searchData,
      });

      
      const sortedUsers = res.data.sort((a, b) => (a.data_hora < b.data_hora ? 1 : -1));
      console.log("Dados filtrados e ordenados do backend:", sortedUsers);

      setUsers(sortedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Pesquisar Orçamentos</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Data de Início:</label>
          <input
            type="date"
            name="startDate"
            value={searchData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Data de Fim:</label>
          <input
            type="date"
            name="endDate"
            value={searchData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cliente:</label>
          <input
            type="text"
            name="cliente"
            value={searchData.cliente}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Vendedor:</label>
          <input
            type="text"
            name="vendedor"
            value={searchData.vendedor}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Pesquisar</button>
      </form>
      <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
    </div>
  );
};

export default Pesquisa;
