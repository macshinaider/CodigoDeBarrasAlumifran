import { PrismaClient } from "@prisma/client";
import * as xlsx from "xlsx";
import * as path from "path";
import { IUdb } from "./types";
import { readXLSApi } from "./update/lerxlx";
import sendJsonToRabbitMQ from "./rabbitmq/rabbitmq";

const prisma = new PrismaClient();

// Ler o arquivo XLS e extrair os dados
function readXLS(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  return sheetData;
}

// Função para migrar os dados para o banco de dados usando o Prisma
export async function migrateDataToPrisma(data: any[]) {
  for (const row of data) {
    const descricao = row.prodes.toString();
    const codigo = row.procod.toString();
    const valor = row.propcv;
    const ativo = row.proatinat.toString();

    console.log("ativo: ", ativo);

    if (ativo.toLowerCase() === "false") {
      console.log(`Ignorando linha com ativo 'False':`, row);
      continue; 
    }

    const existingData = await prisma.alumifranPrecos.findUnique({
      where: {
        procod: codigo,
      },
    });
    console.log("🚀 ~ file: lerplanilha.ts:37 ~ migrateDataToPrisma ~ existingData:", existingData)

    if (existingData) {
      // Atualizar os dados caso já existam
      if (existingData.prodes !== descricao || existingData.propcv !== valor) {
        await prisma.alumifranPrecos.update({
          where: {
            procod: codigo,
          },
          data: {
            prodes: descricao,
            propcv: valor,
          },
        });
        console.log("Dados atualizados:", row);
      }
    } else {
      // Cadastrar os novos dados
      // await prisma.alumifranPrecos.create({
      //   data: {
      //     prodes: descricao,
      //     procod: codigo,
      //     propcv: valor,
      //   },
      // });

      console.log("Inserindo dados:", row);
    }
    
  }
}

export default async function CriarMigrar() {
  
  try {
    const filePath = path.join(__dirname, "..", "dados", "PRODUTOS.XLS");
    const data = readXLS(filePath);

    await prisma.$connect();
    await migrateDataToPrisma(data);

    console.log("Dados migrados com sucesso para o Postgre usando Prisma.");
    await prisma.$disconnect();
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

export async function RabbitMQEvent() {

  try {
    const filePath = path.join(__dirname, "..", "dados", "PRODUTOS.XLS");
    const data = readXLSApi(filePath);

    sendJsonToRabbitMQ(data)
    
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    
  }
}
