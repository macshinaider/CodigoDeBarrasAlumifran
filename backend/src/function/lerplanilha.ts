import * as fs from "fs";
import { PrismaClient } from "@prisma/client";
import * as xlsx from "xlsx";

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
    await prisma.alumifranPrecos.create({
      data: {
        procod: row.procod,
        prodes: row.prodes,
        promar: row.promar,
        prouni: row.prouni,
        proatinat: row.proatinat,
        procp1: row.procp1,
        procp2: row.procp2,
        proref: row.proref,
        prosit: row.prosit,
        procp3: row.procp3,
        procp4: row.procp4,
        propeso: row.propeso,
        procodipi: row.procodipi,
        procest: row.procest,
        proqmi: row.proqmi,
        propdc: row.propdc,
        propdv: row.propdv,
        propcv: row.propcv,
        proicm: row.proicm,
        proipi: row.proipi,
        comissao: row.comissao,
        profin: row.profin,
        profre: row.profre,
        proipf: row.proipf,
        proipe: row.proipe,
        procfv: row.procfv,
        procop: row.procop,
        procus: row.procus,
        prorent: row.prorent,
        procapt: row.procapt,
        prodesc: row.prodesc,
        proipecus: row.proipecus,
        prodifimp: row.prodifimp,
        proemb: row.proemb,
        prodescon: row.prodescon,
        prolotvd: row.prolotvd,
        proorig: row.proorig,
        procsosn: row.procsosn,
        procofins: row.procofins,
        proadc: row.proadc,
        clf_des: row.clf_des,
        clf_ncm: row.clf_ncm,
      },
    });
  }
}

export default async function CriarMigrar() {
  try {
    const filePath = "../dados/PRODUTOS.XLS";
    const data = readXLS(filePath);

    await prisma.$connect();
    await migrateDataToPrisma(data);

    console.log("Dados migrados com sucesso para o MySQL usando Prisma.");
    await prisma.$disconnect();
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}
