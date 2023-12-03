/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../panel/src/**/*.{vue,js,ts,jsx,tsx,html}", "../tienda/src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    container: {

      center: true,

    },
    extend: {
      colors: {
        blue: '#00b1f4',
        ultraviolet: '#3b48fe',
        magenta: '#fb3e79',
        babelynnBrown: '#b4644b',
        babelynnBrownHover: '#885344',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

