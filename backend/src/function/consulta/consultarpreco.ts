import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ConsultarPreco = async (req: express.Request, res: express.Response) => {
  try {
    const codigodebarras = req.params.codigodebarras;
    if (!codigodebarras) {
      return res.status(400).json({
        message: "O código de barras é obrigatório",
      });
    }
    const consultar = await prisma.alumifranPrecos.findUnique({
      where: {
        procod: codigodebarras,
      },
    });
    if (!consultar) {
      return res.status(400).json({
        message: "Código de barras não encontrado",
      });
    }
    return res.status(200).json(consultar);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: JSON.stringify(error.message),
    });
  }
};

export default ConsultarPreco;
