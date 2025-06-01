const tailwindRootConfig = require("../../tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindRootConfig,
  darkMode: "media",
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",

    /**
     *
     * If you have monorepo with Tailwind CSS components in one package and
     * application in the other you may find that Tailwind won't work for components. To
     * fix that you need to add new entry to content inside tailwind.config.js:
     */
    "../../packages/hello-ui/components/**/*.{html,js,ts,jsx,tsx,mdx}", // here is path to Tailwind CSS components package
  ],
};
