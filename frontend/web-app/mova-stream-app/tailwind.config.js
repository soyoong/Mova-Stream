/** @type {import('tailwindcss').Config} */

const colors = {
  grey: 'var(--grey)',
  'grey-light': 'var(--grey-light)',
  'grey-dark': 'var(--grey-dark)',
  'primary-red': 'var(--primary-red)',
  page: 'var(--background-page)',
}

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-banner':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
      backgroundColor: {
        ...colors,
      },
      borderColor: {
        ...colors,
      },
      placeholderColor: {
        ...colors,
      },
      colors: {
        ...colors
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
