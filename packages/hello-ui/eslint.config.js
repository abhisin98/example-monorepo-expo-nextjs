const eslintConfig = require("@monorepo/eslint-config/native");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  //
  eslintConfig,
  globalIgnores(["node_modules", "build", "**/*.json"]),
  {
    rules: {
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
]);
