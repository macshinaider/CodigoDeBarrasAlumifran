import express, { Request, Response } from "express";
import { dadosPlanilhas, filePath, readXLS } from "../dadosplanilhas";
import * as xlsx from "xlsx";


export function Consultar(req: Request, res: Response) {
  
}

function findRowByBarcode(filePath: string, targetBarcode: string) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheetData: any[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
    const foundRow = sheetData.find((row: any) => row.codigodebarras === targetBarcode);
    return foundRow || null;
  }
  
  const filePath = 'caminho/para/sua/planilha.xlsx';
  const targetBarcode = '12346';
  
  const foundRow = findRowByBarcode(filePath, targetBarcode);
  if (foundRow) {
    console.log('Linha encontrada:', foundRow);
  } else {
    console.log('Código de barras não encontrado.');
  }
