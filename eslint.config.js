const eslintConfig = require("@monorepo/eslint-config");
const { includeIgnoreFile } = require("@eslint/compat");
const { defineConfig, globalIgnores } = require("eslint/config");
const path = require("path");
const gitignorePath = path.resolve(__dirname, ".gitignore");
const prettierignorePath = path.resolve(__dirname, ".prettierignore");

module.exports = defineConfig([
  //
  eslintConfig,
  //
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  includeIgnoreFile(prettierignorePath, "Imported .prettierignore patterns"),
  globalIgnores(["*.css", "*.json"], "Imported file patterns"),
]);
