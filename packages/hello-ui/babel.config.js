module.exports = function (api) {
  api.cache(true);
  console.log("Babel config for Hello UI");
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "tailwind.config": ["./tailwind.config.js"],
          },
        },
      ],
    ],
  };
};
