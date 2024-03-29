/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
  output: "standalone",
};

module.exports = nextConfig;
