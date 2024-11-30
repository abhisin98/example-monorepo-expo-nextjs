module.exports = {
  // --------------------------------------------------------------------
  extends: ["eslint-config-universe/shared/core.js", "eslint-config-universe/shared/typescript.js", "eslint-config-universe/shared/react.js", "eslint-config-universe/shared/prettier.js"],
  env: { browser: true, commonjs: true },
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
