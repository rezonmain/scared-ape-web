/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import typography from "flowbite-typography";

export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite, typography],
};
