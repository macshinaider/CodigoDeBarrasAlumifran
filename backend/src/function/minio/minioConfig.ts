// src/config/minioConfig.ts
import * as Minio from 'minio'

export const minioClient = new Minio.Client({
  endPoint: "89.117.51.204",
  port: 9000,
  useSSL: false,
  accessKey: "U4dL2m8XSBmV07SCZKQ6",
  secretKey: "pBYa6kzgg3owSnpTqmyfZMlprMmdmWdHEEiUg1Gt",
});
