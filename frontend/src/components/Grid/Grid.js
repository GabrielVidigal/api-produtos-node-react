import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./style.css"; 
import moment from "moment";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8800/${id}`)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">Cliente</th>
          <th className="th">Vendedor</th>
          <th className="th">Valor Orcado</th>
          <th className="th">Data e Hora</th>
          <th className="th">Descrição</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td className={`td ${item.alignCenter ? "center" : "start"}`} style={{ width: item.width }}>
              {item.cliente}
            </td>
            <td className={`td ${item.alignCenter ? "center" : "start"}`} style={{ width: item.width }}>
              {item.vendedor}
            </td>
            <td className={`td ${item.alignCenter ? "center" : "start"}`} style={{ width: item.width }}>
              {item.valor_orcado}
            </td>
            <td className={`td ${item.alignCenter ? "center" : "start"}`} style={{ width: item.width }}>
              {moment(item.data_hora).format("DD/MM/YYYY HH:mm:ss")}
            </td>
            <td className={`td ${item.alignCenter ? "center" : "start"}`} style={{ width: item.width }}>
              {item.descricao}
            </td>
            <td className={`td ${item.alignCenter ? "center" : "start"} onlyWeb`} style={{ width: item.width }}>
              {item.fone}
            </td>
            <td className="td" align="center" width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>
            <td className="td" align="center" width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
