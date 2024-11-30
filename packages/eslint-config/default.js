module.exports = {
  extends: ["eslint-config-universe/shared/core.js", "eslint-config-universe/shared/typescript.js", "eslint-config-universe/shared/prettier.js"],
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
