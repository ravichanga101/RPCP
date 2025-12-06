/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.charusat.ac.in',
      },
    ],
  },
};

module.exports = nextConfig;
