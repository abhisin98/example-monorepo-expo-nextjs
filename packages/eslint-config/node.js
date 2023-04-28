module.exports = {
  extends: ["eslint-config-universe/node"],
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
