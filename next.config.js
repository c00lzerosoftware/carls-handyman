/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/carls-handyman' : '',
  assetPrefix: isProd ? '/carls-handyman/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
