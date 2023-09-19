-- CreateTable
CREATE TABLE "AlumifranPrecos" (
    "id" SERIAL NOT NULL,
    "procod" TEXT,
    "prodes" TEXT,
    "propcv" DECIMAL(10,2),

    CONSTRAINT "AlumifranPrecos_pkey" PRIMARY KEY ("id")
);
