import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes";
import fs from "fs";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as cron from "node-cron";
import CriarMigrar from "./function/lerplanilha";

class Server {
  app: any;
  port: string | number;
  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT || 3001;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.scheduleCronJob();
    this.startServer();
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.set("trust proxy", true);
    this.app.use(bodyParser.json());
    this.app.use(express.json());
  }

  initializeRoutes() {
    this.app.use(router);
  }
  scheduleCronJob() {
    cron.schedule(
      "0 10 * * *",
      () => {
        CriarMigrar();
      },
      {
        timezone: "America/Sao_Paulo",
      }
    );
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log("Servidor rodando na porta:" + this.port);
    });
  }
}

const server = new Server();
