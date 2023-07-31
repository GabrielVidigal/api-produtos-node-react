// routes/user.js

import express from "express";
import { getUsers, addUser, updateUser, deleteUser, getFilteredOrcamentos } from "../controllers/user.js";


const router = express.Router();

router.get("/", getUsers);
router.get("/pesquisa", getFilteredOrcamentos);
router.post("/", addUser);
router.post("/registro", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
