const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '500px' },
    },
    extend: {
      fontFamily: {
        sans: ['Untitled Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
};
