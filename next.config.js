/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: ['hifibridge.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;


