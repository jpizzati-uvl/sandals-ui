/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['OpenSans', 'Arial', 'Helvetica', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1460px',
      xxl: '1920px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {},
  },
  plugins: [],
};
