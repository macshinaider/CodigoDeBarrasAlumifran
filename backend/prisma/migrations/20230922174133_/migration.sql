/*
  Warnings:

  - You are about to alter the column `propcv` on the `AlumifranPrecos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `propdc` on the `AlumifranPrecos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `propdv` on the `AlumifranPrecos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" ALTER COLUMN "propcv" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "propdc" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "propdv" SET DATA TYPE DECIMAL(10,2);
