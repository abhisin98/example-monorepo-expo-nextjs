const { jsExtensions, tsExtensions, platformSubextensions, computeExpoExtensions } = require("eslint-config-universe/shared/extensions");

const allExtensions = computeExpoExtensions([...jsExtensions, ...tsExtensions], platformSubextensions);

module.exports = {
  extends: ["eslint-config-universe/shared/core.js", "eslint-config-universe/shared/typescript.js", "eslint-config-universe/shared/react.js", "eslint-config-universe/shared/prettier.js"],
  globals: {
    __DEV__: false,
    Atomics: false,
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: false,
    clearInterval: false,
    clearTimeout: false,
    fetch: false,
    navigator: false,
    process: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    setImmediate: false,
    setInterval: false,
    setTimeout: false,
    window: false,
  },
  settings: {
    "import/extensions": allExtensions,
    "import/resolver": {
      node: { extensions: allExtensions },
    },
  },
  overrides: [
    {
      files: ["*.web.*"],
      env: { browser: true },
    },
  ],
  // do some additional things with it
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
