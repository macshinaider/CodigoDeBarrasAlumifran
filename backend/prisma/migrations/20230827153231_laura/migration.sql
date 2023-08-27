/*
  Warnings:

  - You are about to drop the column `prodesc` on the `AlumifranPrecos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" DROP COLUMN "prodesc",
ADD COLUMN     "prodes" TEXT;
