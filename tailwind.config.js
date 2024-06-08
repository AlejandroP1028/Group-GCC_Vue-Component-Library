module.exports = {
  darkMode: 'selector',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'selector', // or 'media' or 'class'
   theme: {
    fontFamily: {
      'sans' : 'Gabarito'
    },
     extend: {
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
