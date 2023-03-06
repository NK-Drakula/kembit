/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        primary: '#4648EC',
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
}
