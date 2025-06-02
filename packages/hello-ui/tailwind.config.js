const tailwindRootConfig = require("../../tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindRootConfig,
  darkMode: "media",
  content: [
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./__tests__/**/*.test.{html,js,ts,jsx,tsx,mdx}",
    "./__tests__/**/*.{html,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
};
