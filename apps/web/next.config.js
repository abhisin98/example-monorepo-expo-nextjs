const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  // swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-svg",
    "@monorepo/hello-ui",
    "@ui-kitten/components",
    "@ui-kitten/eva-icons",
    "react-native-eva-icons",
    // "expo",
    // Add more React Native / Expo packages here...
  ],
  // experimental: {
  //   forceSwcTransforms: true,
  // },
});

module.exports = nextConfig;
