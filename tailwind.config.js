/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // or you can directly use the specific shade like '#6366F1' (which is indigo-500)
        "primary-dark": "#5255cb",
        main: '#E5E7EB', // this corresponds to bg-gray-200
      },
    },
  },
  plugins: [],
};
