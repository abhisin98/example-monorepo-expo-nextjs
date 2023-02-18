module.exports = {
  root: true,
  extends: ["eslint-config-universe/native", "eslint-config-prettier"],
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  // Disable import/namespace due to https://github.com/facebook/react-native/issues/28549
  // By setting delimiters to `\|/`, this ignore is supported on Windows too
  settings: {
    "import/ignore": ["node_modules(\\\\|/)react-native(\\\\|/)index\\.js$"],
  },
};
