/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        primaryRed: 'var(--primary-red)',
      },
      backgroundColor: {
        page: '#141414',
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
      },
    },
  },

  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
}
