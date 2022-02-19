/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'],
    minimumCacheTTL: 6000000,
  },
};

module.exports = nextConfig;
