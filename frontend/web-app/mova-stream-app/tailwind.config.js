/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundColor: {
        grey: 'var(--grey)',
        greyDark: 'var(--grey-dark)',
        greyLight: 'var(--grey-light)',
        'primary-red': 'var(--primary-red)',
      },
      backgroundImage: {
        'gradient-banner':
          'linear-gradient(to bottom, rgba(20,20,20,0) 0,rgba(20,20,20,.10) 15%,rgba(20,20,20,.30) 29%,rgba(20,20,20,.48) 44%,rgba(20,20,20,.78) 68%,rgba(20,20,20) 100%);',
      },
      colors: {
        grey: 'var(--grey)',
        'grey-dark': 'var(--grey-dark)',
        'grey-light': 'var(--grey-light)',
        'primary-red': 'var(--primary-red)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      padding: {
        item: 'var(--space-item)',
      },
      margin: {
        item: 'var(--space-item)',
      },
      gap: {
        item: 'var(--space-item)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
}
