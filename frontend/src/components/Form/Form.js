import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./style.css";

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.cliente.value = onEdit.cliente;
      user.vendedor.value = onEdit.vendedor;
      user.valor_orcado.value = onEdit.valor_orcado;
      user.descricao.value = onEdit.descricao;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.cliente.value ||
      !user.vendedor.value ||
      !user.valor_orcado.value ||
      !user.descricao.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put(`http://localhost:8800/${onEdit.id}`, {
          cliente: user.cliente.value,
          vendedor: user.vendedor.value,
          valor_orcado: user.valor_orcado.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          cliente: user.cliente.value,
          vendedor: user.vendedor.value,
          valor_orcado: user.valor_orcado.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.cliente.value = "";
    user.vendedor.value = "";
    user.valor_orcado.value = "";
    user.descricao.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <form className="form-container" ref={ref} onSubmit={handleSubmit}>
      <div className="input-area">
        <label className="label">Cliente</label>
        <input className="input" name="cliente" />
      </div>
      <div className="input-area">
        <label className="label">Vendedor</label>
        <input className="input" name="vendedor" />
      </div>
      <div className="input-area">
        <label className="label">Valor Orçado</label>
        <input className="input" name="valor_orcado" />
      </div>
      <div className="input-area">
        <label className="label">Descrição</label>
        <input className="input" name="descricao" />
      </div>

      <button className="button" type="submit">SALVAR</button>
    </form>
  );
};

export default Form;
