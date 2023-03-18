/**@type {import('tailwindcss').Config}*/

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flub: "flub 7s infinite"
      },

      keyframes: {
        flub: {
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px, 40px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
      
      colors: {
        gray: colors.gray,
        blue: colors.blue,
      },
      
      fontFamily: {
        'sans': ['Inter Var', ...defaultTheme.fontFamily.sans],
        'writer': ['iA Writer Quattro', ...defaultTheme.fontFamily.sans],
      },

      typography: (theme) => ({
        lg: {
          css: {
            color: theme('colors.slate.900'),
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '700',
            },
            strong: {
              fontWeight: '700',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              fontWeight: '700',
              '&:hover': {
                color: theme('colors.blue.800')
              },
            },
            p: {
              fontWeight: '400',
            },
            li: {
              fontWeight: '400',
            },
            blockquote: {
              fontWeight: '400',
            },
            code: {
              fontFamily: 'font-mono',
              fontWeight: '500',
            },
          },
        },
    }),
  },
  plugins: [],
}}
