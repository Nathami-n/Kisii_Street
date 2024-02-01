/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      custom:['Nunito']
    },
    backgroundColor: {
      primary:"#000000"
    },
    color: {
      golden: "#fcec14f3"
    }
  },
},
  plugins: [],
}