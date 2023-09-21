import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ConsultarPreco = async (req: express.Request, res: express.Response) => {
  const dados = req.body;
  console.log("🚀 ~ file: consultarpreco.ts:8 ~ ConsultarPreco ~ dados:", dados)
  if (!dados) {
    return res.status(400).json({
      mensagem: "Dados não informados",
    });
  }

  try {
    const consultar = await prisma.alumifranPrecos.findUnique({
      where: {
        procod: dados.codigodebarras,
      },
    });
    if (!consultar) {
      return res.status(400).json({
        mensagem: "Código de barras não encontrado",
      });
    }

    return res.status(200).json(consultar);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default ConsultarPreco;
