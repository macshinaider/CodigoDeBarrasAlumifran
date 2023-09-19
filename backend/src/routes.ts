import express from "express";
import ConsultarPreco from "./function/consulta/consultarpreco";

const router = express.Router();

router.post("/consultarpreco", ConsultarPreco);

export default router;
