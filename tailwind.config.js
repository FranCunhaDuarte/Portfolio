/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
        'bg-default-projects': 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 50%, rgba(36,36,36,1) 100%)',
        'projects': 'linear-gradient( 305deg, hsl(0deg 0% 48%) 0%, hsl(0deg 0% 40%) 20%, hsl(0deg 0% 30%) 40%, hsl(0deg 0% 30%) 60%, hsl(0deg 0% 40%) 80%, hsl(0deg 0% 48%) 100% )'
      },
      colors: {
        black: {
          100: '#141414',
          200: '#161616',
          300: '#1C1C1C'
        },
        white: '#FFFFFF',
        gray: '#898989',
        darkgray: '#525252',
        green: '#12793a',
        blue: '#213d91'
      }
    },
  },
  plugins: [],
}

// npm run build-css