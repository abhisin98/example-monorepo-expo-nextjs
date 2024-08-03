const { withGluestackUI } = require("@gluestack/ui-next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["nativewind", "react-native-css-interop"],
};

module.exports = withGluestackUI(nextConfig);
