const { defineConfig } = require("eslint/config");
const universeConfig = require("eslint-config-universe/flat/node.js");

module.exports = defineConfig([
  universeConfig,
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
]);
