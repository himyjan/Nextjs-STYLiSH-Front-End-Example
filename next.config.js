/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['api.appworks-school.tw'],
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
};

module.exports = nextConfig;
