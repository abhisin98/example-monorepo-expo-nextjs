import type { Options } from "tsup";

const config: Options = {
  entry: ["src/index.ts"],
  outDir: "build",
  sourcemap: true,
  dts: true,
  external: ["react", "react-native", "react-native-web"],
};

export default config;
