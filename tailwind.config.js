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
      colors: {
        slate: colors.slate,
        blue: colors.blue,

      },
      
      fontFamily: {
        'sans': ['Inter Var', ...defaultTheme.fontFamily.sans],
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
