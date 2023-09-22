import express from "express";
import ConsultarPreco from "./function/consulta/consultarpreco";
import { uploadFile } from "./function/update/update";
import multer from "multer";
import upload from "./function/minio/upload";
import bodyParser from 'body-parser';

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


const router = express.Router();

router.post("/consultarpreco/:codigodebarras", ConsultarPreco);
router.post("/update", upload.single("xlsFile"), uploadFile);

export default router;
