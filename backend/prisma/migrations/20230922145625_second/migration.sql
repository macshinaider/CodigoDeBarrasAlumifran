/*
  Warnings:

  - A unique constraint covering the columns `[procod]` on the table `AlumifranPrecos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AlumifranPrecos_procod_key" ON "AlumifranPrecos"("procod");
