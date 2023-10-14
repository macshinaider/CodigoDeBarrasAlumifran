import { connect, Connection, Channel } from "amqplib";
import { rabbitMQConfig } from "./config";

async function sendJsonToRabbitMQ(jsonData: any) {
  try {
    const connection: Connection = await connect({
      hostname: rabbitMQConfig.hostname,
      port: rabbitMQConfig.port,
      username: rabbitMQConfig.username,
      password: rabbitMQConfig.password,
    });
    const channel = await connection.createChannel();
    await channel.assertQueue(rabbitMQConfig.fila);

    // Envie cada linha como uma mensagem separada para a fila
    for (const row of jsonData) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      channel.sendToQueue(
        rabbitMQConfig.fila,
        Buffer.from(JSON.stringify(row))
      );
      console.log(`JSON enviado para o RabbitMQ: ${JSON.stringify(row)}`);
    }

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Erro ao enviar JSON para o RabbitMQ:", error);
  }
}

export default sendJsonToRabbitMQ;
