import { withGluestackUI } from "@gluestack/ui-next-adapter";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  transpilePackages: [],
};

export default withGluestackUI(nextConfig);
