/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '20px',
      },
      screens: {
        '2xl': '1280px'
      },
      transitionTimingFunction: {
        ease: 'ease'
      },
      fontFamily: {
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        primary: '#0075ff',
        secondary: '#a0aec0',
      },
      backgroundImage: {
        blueBlackrGadient: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }
    },
  },
  plugins: [],
}

