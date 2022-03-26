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
        'medium-dark-gray' : '#121212',
        'spotify-green' : '#1ed760'
      },
      fontFamily:{
        gotham : 'Gotham, cursive'
      }
    },
    
    
  },
  plugins: [],
}
