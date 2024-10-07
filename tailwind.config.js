/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#425CEC',
        title: "#292929"
      },
      fontFamily: {

        Nunito: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

