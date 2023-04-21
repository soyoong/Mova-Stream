/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: {
        content: 'var(--padding-container)',
      },
      margin: {
        content: 'var(--padding-container)',
      },
      gap: {
        content: 'var(--padding-container)',
        item: 'var(--padding-element)',
      },
      textColor: {
        primaryRed: 'var(--primary-red)',
        'grey-light': 'var(--grey-light)',
        'grey-light-025': 'var(--grey-light-025)',
        'grey-light-05': 'var(--grey-light-05)',
        'grey-light-075': 'var(--grey-light-075)',
        'grey-dark': 'var(--grey-dark)',
        'grey-dark-025': 'var(--grey-dark-025)',
        'grey-dark-05': 'var(--grey-dark-05)',
        'grey-dark-075': 'var(--grey-dark-075)',
      },
      backgroundColor: {
        page: '#141414',
        light: 'var(--grey-light)',
        dark: 'var(--grey-dark)',
      },
      caretColor: {
        red: 'var(--primary-red)',
        light: 'var(--grey-light)',
        dark: 'var(--grey-dark)',
      },
      borderColor: {
        red: 'var(--primary-red)',
        light: 'var(--grey-light)',
        dark: 'var(--grey-dark)',
      },
      placeholderColor: {
        light: 'var(--grey-light)',
        dark: 'var(--grey-dark)',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.10) 15%,rgba(20,20,20,.30) 29%,rgba(20,20,20,.48) 44%,rgba(20,20,20,.78) 68%,rgba(20,20,20) 100%);',
      },
      dropShadow: {
        card: '0px 0px 8px 0px rgba(20, 20, 20, 1)',
      },
      width: {
        small: 'var(--icon-small)',
        primary: 'var(--icon-primary)',
        medium: 'var(--icon-medium)',
        large: 'var(--icon-large)',
      },
      height: {
        small: 'var(--icon-small)',
        primary: 'var(--icon-primary)',
        medium: 'var(--icon-medium)',
        large: 'var(--icon-large)',
      },
      animation: {
        scaleXIn: 'scaleXIn 0.3s ease-in-out',
        scaleXOut: 'scaleXOut 0.3s ease-in-out',
        easeInWidth: 'inWidth 0.5s ease-in',
        easeOutWidth: 'outWidth 0.5s ease-out',
        easeInHeight: 'inHeight 0.5s ease-in',
        easeOutHeight: 'outHeight 0.5s ease-out',
      },
    },
  },

  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide'), require('daisyui')],
}
