import { connect, Connection, Channel, ConsumeMessage } from "amqplib";
import { rabbitMQConfig } from "./config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IAProduto {
  procod: string;
  prodes: string;
  promar: string;
  prouni: string;
  proatinat: boolean;
  procp1: string;
  procp2: string;
  proref: string;
  prosit: string;
  procp3: string;
  procp4: string;
  propeso: number;
  procodipi: string;
  procest: string;
  proqmi: number;
  propdc: number;
  propdv: number;
  propcv: number;
  proicm: number;
  proipi: number;
  comissao: number;
  profin: number;
  profre: number;
  proipf: number;
  proipe: number;
  procfv: number;
  procop: number;
  procus: number;
  prorent: number;
  procapt: number;
  prodesc: number;
  proipecus: number;
  prodifimp: number;
  proemb: number;
  prodescon: number;
  prolotvd: number;
  proorig: string;
  procsosn: string;
  prostipi: string;
  propis: string;
  procofins: string;
  proadc: number;
  clf_des: string;
  clf_ncm: string;
}

export async function consumeFromRabbitMQ() {
  try {
    const connection: Connection = await connect({
      hostname: rabbitMQConfig.hostname,
      port: rabbitMQConfig.port,
      username: rabbitMQConfig.username,
      password: rabbitMQConfig.password,
    });

    const channel = await connection.createChannel();
    await channel.assertQueue(rabbitMQConfig.fila);

    console.log(`Aguardando mensagens na fila ${rabbitMQConfig.fila}`);

    // Configurar a função de callback para processar as mensagens recebidas
    channel.consume(
      rabbitMQConfig.fila,
      async (message: ConsumeMessage | null) => {
        if (message) {
          const jsonData: IAProduto = JSON.parse(message.content.toString());
          console.log("🚀 ~ file: consumerFila.ts:74 ~ jsonData:", jsonData);
          const existingData = await prisma.alumifranPrecos.findUnique({
            where: {
              procod: jsonData.procod,
            },
          });
          console.log("🚀 produto ja existe!:", existingData);
          setTimeout(() => {
            // Continue consumindo a próxima mensagem
          }, 1000);

          if (existingData) {
            if (
              existingData.prodes !== jsonData.prodes ||
              existingData.propcv !== existingData.propcv
            ) {
              const update = await prisma.alumifranPrecos.update({
                where: {
                  procod: jsonData.procod,
                },
                data: {
                  prodes: jsonData.prodes,
                  propcv: jsonData.propcv,
                },
              });
              setTimeout(() => {
                // Continue consumindo a próxima mensagem
              }, 1000);
              console.log("🚀 Produto Atualizado :", update);
              channel.ack(message);
            }
          } else {
            // Cadastrar os novos dados
            const cadastrado = await prisma.alumifranPrecos.create({
              data: {
                prodes: jsonData.prodes,
                procod: jsonData.procod,
                propcv: jsonData.propcv,
                promar: jsonData.promar,
                prouni: jsonData.prouni,
                proatinat: jsonData.proatinat,
                procp1: jsonData.procp1,
                procp2: jsonData.procp2,
                proref: jsonData.proref,
                prosit: jsonData.prosit,
                procp3: jsonData.procp3,
                procp4: jsonData.procp4,
                propeso: jsonData.propeso,
                procodipi: jsonData.procodipi,
                procest: jsonData.procest,
                proqmi: jsonData.proqmi,
                propdc: jsonData.propdc,
                propdv: jsonData.propdv,
                proicm: jsonData.proicm,
                proipi: jsonData.proipi,
                comissao: jsonData.comissao,
                profin: jsonData.profin,
                profre: jsonData.profre,
                proipf: jsonData.proipf,
                proipe: jsonData.proipe,
                procfv: jsonData.procfv,
                procop: jsonData.procop,
                procus: jsonData.procus,
                prorent: jsonData.prorent,
                procapt: jsonData.procapt,
                prodesc: jsonData.prodesc,
                proipecus: jsonData.proipecus,
                prodifimp: jsonData.prodifimp,
                proemb: jsonData.proemb,
                prodescon: jsonData.prodescon,
                prolotvd: jsonData.prolotvd,
                proorig: jsonData.proorig,
                procsosn: jsonData.procsosn,
                prostipi: jsonData.prostipi,
                propis: jsonData.propis,
                procofins: jsonData.procofins,
                proadc: jsonData.proadc,
                clf_des: jsonData.clf_des,
                clf_ncm: jsonData.clf_ncm,
              },
            });
            console.log("🚀 Produto Cadastrado:", cadastrado);
            channel.ack(message);

            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        }
      }
    );
  } catch (error) {
    console.error("Erro ao consumir mensagens do RabbitMQ:", error);
  }
}
