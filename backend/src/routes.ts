import express from "express";
import { Consultar } from "./function/consultar/produtos";


const router = express.Router();


router.post('/consultarpreco', Consultar)

export default router;
