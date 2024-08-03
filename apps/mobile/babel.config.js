/** @type {import("@babel/core").ConfigFunction} */
module.exports = function (api) {
  api.cache(true);
  process.env.EXPO_USE_METRO_WORKSPACE_ROOT = true;

  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],

          // alias: {
          //   "@": "./",
          // },
        },
      ],
    ],
  };
};
