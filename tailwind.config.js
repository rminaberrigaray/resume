const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { "raw": "print" },  
      },
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "a4": "64.609375rem"
      },
      height: {
        "a4": "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "body": {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      });

    }),

  ]
}

