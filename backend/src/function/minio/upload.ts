import multer from "multer";
import path from "path";
import CriarMigrar, { RabbitMQEvent } from "../lerplanilha";

const filePath = path.join(__dirname, "..", "..", "dados");

const namearquivo = "PRODUTOS";

// Configuração do destino e do nome do arquivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filePath); // Pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, `${namearquivo}${extname}`); // Nome do arquivo no formato timestamp.extensao
  },
});



// Configuração do filtro para aceitar apenas arquivos com extensão .xls
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.originalname.endsWith(".XLS")) {
    cb(null, true);
  } else {
    cb(new Error("Apenas arquivos com extensão .xls são permitidos"), false);
  }
};

// Configuração do Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
