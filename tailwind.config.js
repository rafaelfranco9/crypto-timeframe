module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'background':'#232323',
      'main':'#FF8E25',
      'secondary':'#F8F8F8',
      'gray':'#4B4B4B'
    },
    fontFamily: {
      raleway: ['Raleway','roboto','sans-serif']
    }
  },
  plugins: [],
}


