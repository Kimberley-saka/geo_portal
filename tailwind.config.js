/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        greenishBlack: '#012929',
        lightBlueGray: '#6699cc',
    },
    backgroundImage: {
      'abstract': 'url(/img/abstract-bg.jpg)',
    },
  },
  plugins: [],
}
}