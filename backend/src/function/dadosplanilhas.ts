import path from 'path';
import * as xlsx from 'xlsx';

export function readXLS(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheetData: any[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
  return sheetData;
}

export const filePath = path.join(__dirname, "..", "dados", "PRODUTOS.XLS")
export const dadosPlanilhas = readXLS(filePath);

console.log('planilha lida com sucesso');