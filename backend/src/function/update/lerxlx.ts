import * as xlsx from "xlsx";
import * as path from "path";
import sendJsonToRabbitMQ from "../rabbitmq/rabbitmq";

export function readXLSApi(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  return sheetData;
}

export async function migrateDataToPrisma(data: any[]) {
  for (const row of data) {
    const descricao = row.prodes.toString();
    const codigo = row.procod.toString();
    const valor = row.propcv;
    const ativo = row.proatinat.toString();

    if (ativo.toLowerCase() === "false") {
      console.log(`Ignorando linha com ativo 'False':`, row);
      continue;
    }
    console.log(
      `Migrando linha com ativo 'True': ${descricao}, ${codigo}, ${valor}`
    );

    const rowData: Iudata = {codigo, valor, descricao};
   

    // Envie cada linha para o RabbitMQ separadamente
    sendJsonToRabbitMQ(rowData);
  }

  
}

interface Iudata {
  descricao: string;
  codigo: string;
  valor: string;
}
