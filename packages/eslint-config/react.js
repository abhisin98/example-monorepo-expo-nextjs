module.exports = {
  extends: ["eslint-config-universe/web"],
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
