import type { NextConfig } from "next";
import { withGluestackUI } from "@gluestack/ui-next-adapter";

const nextConfig: NextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@react-native/assets-registry/registry": "react-native-web/dist/cjs/modules/AssetRegistry",
    };
    return config;
  },
};

export default withGluestackUI(nextConfig);
