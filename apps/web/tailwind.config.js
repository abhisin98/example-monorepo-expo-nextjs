const tailwindRootConfig = require("../../tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindRootConfig,
  darkMode: "class",
  important: "html",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/core-components/**/**/*.{html,js,jsx,ts,tsx}",
    "./src/hooks/**/*.{html,js,jsx,ts,tsx,mdx}",

    /**
     *
     * If you have monorepo with Tailwind CSS components in one package and
     * application in the other you may find that Tailwind won't work for components. To
     * fix that you need to add new entry to content inside tailwind.config.js:
     */
    "../../packages/hello-ui/components/**/*.{html,js,jsx,ts,tsx,mdx}", // here is path to Tailwind CSS components package
  ],
};
