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
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "a4": "210mm"
      },
      width: {
        "a4": "210mm"
      },
      height: {
        "a4": "297mm",
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

