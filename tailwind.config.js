module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'black': '#000000',
        'dark-gray': '#090909',
        'medium-dark-gray' : '#1e1e1e',
        'medium-gray':'#171717',
        'spotify-green' : '#1ed760',
        'weak-gray':'#797979',
        'hover-gray':'#333333'
      },
      fontFamily:{
        gotham : 'Gotham, cursive'
      }
    },
  },
  plugins: [],
}
