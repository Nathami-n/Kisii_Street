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
      primary:"#0c0c0c"
    },
    color: {
      golden: "#fcec14f3"
    },
    backgroundImage: {
      hero:"url('/bg0-img.jpg')"
    }
  },
},
  plugins: [],
}