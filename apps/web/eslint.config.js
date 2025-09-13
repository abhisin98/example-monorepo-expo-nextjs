const { defineConfig, globalIgnores } = require("eslint/config");
const eslintConfig = require("@monorepo/eslint-config/react");
const { flatConfig } = require("@next/eslint-plugin-next");

module.exports = defineConfig([
  //
  flatConfig.recommended,
  eslintConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-overload-matches": "off",
      "react/jsx-key": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
    settings: {
      next: {
        rootDir: "apps/web/",
      },
    },
  },
  globalIgnores(["node_modules", ".next", "build"]),
]);
