/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        'universe' : "url('/src/assets/img/univers.png')",
        'footer': "url('/src/assets/img/footer-bg.png')",
        'cloudy':"url('/src/assets/img/cloudy.svg')",
      },
      dropShadow: {
        'custom': '0 1px 1px rgba(29, 29, 29, 0.5)',
      },
      colors: {
        'blur': 'rgba(255,255,255, 0.05)',
        'transparent': 'rgba(255,255,255, 0)',
      }
    },
  },
  plugins: [],
}