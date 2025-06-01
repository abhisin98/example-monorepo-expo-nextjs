import type { NextConfig } from "next";
import { withGluestackUI } from "@gluestack/ui-next-adapter";

const nextConfig: NextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop", "@monorepo/hello-ui"],
};

export default withGluestackUI(nextConfig);
