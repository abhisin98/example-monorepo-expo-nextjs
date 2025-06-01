import { withGluestackUI } from "@gluestack/ui-next-adapter";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop", "@monorepo/hello-ui"],
};

export default withGluestackUI(nextConfig);
