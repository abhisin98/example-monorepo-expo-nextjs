import { defineConfig } from "tsup";

export default defineConfig({
  // clean: true,
  dts: true,
  entry: ["src/index.ts"],
  outDir: "build",
  sourcemap: true,
  format: ["esm", "cjs"],
  target: "esnext",
  external: ["react", "react-native", "react-native-web"],
});

