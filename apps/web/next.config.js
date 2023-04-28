const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-svg",
    "@ui-kitten/components",
    "@monorepo/hello-ui",
    // "expo",
    // Add more React Native / Expo packages here...
  ],
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = withExpo(nextConfig);
