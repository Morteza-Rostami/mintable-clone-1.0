/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // setting this to class: means: dark mode is based on finding calss: 
  // 'dark' on parent element and not based on windows setting.
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}