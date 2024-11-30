module.exports = {
  extends: ["eslint-config-universe/shared/core.js", "eslint-config-universe/shared/typescript.js", "eslint-config-universe/shared/prettier.js"],
  plugins: ["node"],
  env: { node: true },
  rules: {
    "no-buffer-constructor": "warn",
    "node/no-path-concat": "warn",
    // do some additional things with it
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
