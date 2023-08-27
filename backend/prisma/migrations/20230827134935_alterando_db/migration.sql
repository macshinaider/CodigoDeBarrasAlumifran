/*
  Warnings:

  - Changed the type of `proatinat` on the `AlumifranPrecos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" DROP COLUMN "proatinat",
ADD COLUMN     "proatinat" BOOLEAN NOT NULL;
