const { defineConfig } = require("eslint/config");
const universeConfig = require("eslint-config-universe/flat/native.js");

module.exports = defineConfig([
  universeConfig,
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
]);
