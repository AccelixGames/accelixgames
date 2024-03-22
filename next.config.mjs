/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'gongpark-toyproject.s3.ap-northeast-2.amazonaws.com',
      },
    ],
    domains: ['https://s3.ap-northeast-2.amazonaws.com'],
  },
};

export default nextConfig;
