/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [import("flowbite/plugin")],
};
