/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: '#141414',
      lightblack: '#1C1C1C',
      white: '#FFFFFF',
      gray: '#898989',
      darkgray: '#525252',
      green: '#12793a',
      blue: '#213d91'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1100px'
    },
    fontFamily:{
      sfPro: ['SFPro', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'transparent': 'linear-gradient(to right, rgba(173, 173, 173, 0.20), rgba(255, 255, 255, 0.20))',
        'bg-default-projects': 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 50%, rgba(36,36,36,1) 100%)',
        'projects': 'linear-gradient( 305deg, hsl(0deg 0% 48%) 0%, hsl(0deg 0% 40%) 20%, hsl(0deg 0% 30%) 40%, hsl(0deg 0% 30%) 60%, hsl(0deg 0% 40%) 80%, hsl(0deg 0% 48%) 100% )'
      }
    },
  },
  plugins: [],
}

// npm run build-css