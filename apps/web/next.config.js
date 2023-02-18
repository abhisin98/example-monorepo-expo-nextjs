const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "@avivox/hello-ui",
    "@ui-kitten/components",
    "@eva-design/eva",
    "react-native-svg",
    // "expo",
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
