module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'black': '#000000',
        'dark-gray': '#101010',
        'medium-gray' : '#b2b2b2'
      },
      fontFamily:{
        gotham : 'Gotham, cursive'
      }
    },
    
    
  },
  plugins: [],
}
