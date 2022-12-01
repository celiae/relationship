/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://172.17.0.1:60000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
