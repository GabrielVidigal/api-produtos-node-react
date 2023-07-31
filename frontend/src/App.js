import React, { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Form from "./components/Form/Form";
import Grid from "./components/Grid/Grid";

import Pesquisa from "./Pages/Pesquisa";
import GlobalStyle from "./styles/global";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <>
        <div className="Container">
          <h2>PRODUTOS</h2>
          {/* Adicionei botões nos links */}
          <div className="button-container">
            {/* Adicionei botões nos links */}
            <button className="link-button">
              <Link to="/">Home</Link>
            </button>
            <button className="link-button">
              <Link to="/registro">Novo Registro</Link>
            </button>
            <button className="link-button">
              <Link to="/pesquisa">Pesquisar</Link>
            </button>
          </div>

          <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />

          <Routes>
            <Route
              path="/"
              element={
                <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
              }
            />

            <Route
              path="/pesquisa"
              element={<Pesquisa setOnEdit={setOnEdit} />}
            />
          </Routes>

          <ToastContainer
            autoClose={3000}
            position={toast.POSITION.BOTTOM_LEFT}
          />
        </div>
        <GlobalStyle />
      </>
    </BrowserRouter>
  );
}

export default App;
