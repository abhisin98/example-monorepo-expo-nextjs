const eslintConfig = require("@monorepo/eslint-config/native");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  //
  eslintConfig,
  globalIgnores(["node_modules", "build", ".expo", ".expo-shared", "*.css", "expo-env.d.ts"]),
  {
    settings: {
      // Disable import/namespace due to https://github.com/facebook/react-native/issues/28549
      // By setting delimiters to `\|/`, this ignore is supported on Windows too
      "import/ignore": ["node_modules(\\\\|/)react-native(\\\\|/)index\\.js$"],
    },
  },
]);
