import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.MINIO_ENDPOINT_HOST}`,
        port: `${process.env.MINIO_ENDPOINT_PORT}`,
        pathname: `/${process.env.MINIO_BUCKET_NAME || 'meals'}/**`,
      },
    ],
  },
};

export default nextConfig;
