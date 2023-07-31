import { db } from "../db.js";
import moment from "moment";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM orcamentos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO orcamentos (`cliente`, `vendedor`, `valor_orcado`, `data_hora`, `descricao`) VALUES (?, ?, ?, ?, ?)";

  const values = [
    req.body.cliente,
    req.body.vendedor,
    req.body.valor_orcado,
    moment().format("YYYY-MM-DD HH:mm:ss"),
    req.body.descricao,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE orcamentos SET `cliente` = ?, `vendedor` = ?, `valor_orcado` = ?, `data_hora` = ?, `descricao` = ? WHERE `id` = ?";

  const values = [
    req.body.cliente,
    req.body.vendedor,
    req.body.valor_orcado,
    moment().format("YYYY-MM-DD HH:mm:ss"),
    req.body.descricao,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM orcamentos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

// novo

export const getFilteredOrcamentos = (req, res) => {
  const { dataInicial, dataFinal, cliente, vendedor } = req.query;

  let q = "SELECT * FROM orcamentos WHERE 1 = 1";
  let params = [];

  if (dataInicial && dataFinal) {
    q += " AND data_hora BETWEEN ? AND ?";
    params.push(dataInicial, dataFinal);
  }

  if (cliente) {
    q += " AND cliente LIKE ?";
    params.push(`%${cliente}%`);
  }

  if (vendedor) {
    q += " AND vendedor LIKE ?";
    params.push(`%${vendedor}%`);
  }

  db.query(q, params, (err, data) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });

    return res.status(200).json(data);
  });
};
