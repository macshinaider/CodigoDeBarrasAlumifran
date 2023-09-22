import { Request, Response } from "express";
import { minioClient } from "../minio/minioConfig";
import { PrismaClient } from "@prisma/client";
import { readXLS } from "../dadosplanilhas";
import { RabbitMQEvent, migrateDataToPrisma } from "../lerplanilha";
import path from "path";
import axios from "axios";

const prisma = new PrismaClient();

export async function uploadFile(req: Request, res: Response) {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "File not found" });
    }
    console.log("🚀 ~ file: update.ts:14 ~ uploadFile ~ file:", file);
    RabbitMQEvent()
    res.send("Uploading file");
  } catch (error) {
    console.log(error);
  }
}
