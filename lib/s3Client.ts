import { S3Client } from '@aws-sdk/client-s3';

const accessKey = process.env.MINIO_ACCESS_KEY;
const secretKey = process.env.MINIO_SECRET_KEY;
const minioPointFinal = `${process.env.MINIO_ENDPOINT_PROTOCOL}://${process.env.MINIO_ENDPOINT_HOST}:${process.env.MINIO_ENDPOINT_PORT}`;
const minioRegiao = process.env.MINIO_REGION || 'us-east-1';

if (!accessKey || !secretKey || !minioPointFinal) {
  throw new Error(
    'As credenciais do MinIO ou o endpoint não estão configurados nas variáveis de ambiente.',
  );
}

export const s3Client = new S3Client({
  endpoint: minioPointFinal,
  region: minioRegiao,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
  forcePathStyle: true,
});

export const BUCKET_NAME = process.env.MINIO_BUCKET_NAME || 'meals';
