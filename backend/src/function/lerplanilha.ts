import { PrismaClient } from "@prisma/client";
import * as xlsx from "xlsx";
import * as path from "path";
import { IUdb } from "./types";

const prisma = new PrismaClient();

// Ler o arquivo XLS e extrair os dados
function readXLS(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  return sheetData;
}

// Função para migrar os dados para o banco de dados usando o Prisma
async function migrateDataToPrisma(data: any[]) {
  for (const row of data) {
    const descricao = row.prodes.toString();

    const codigo = row.procod.toString();

    const valor = row.propcv;

    const ativo = row.proatinat.toString();

    console.log("ativo: ", ativo);

    const consultar = await prisma.alumifranPrecos.findMany({
      where: {
        prodes: codigo,
      },
    });

    if (consultar) {
      
    }

    if (typeof descricao === "string") {
      await prisma.alumifranPrecos.create({
        data: {
          prodes: descricao,
          procod: codigo,
          propcv: valor,
        },
      });

      console.log("Inserindo dados:", row);
    } else {
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
