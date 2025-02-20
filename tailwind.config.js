/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00cda0',
        secondary: '#00b3ff',
        accent: '#fe00f8',
        background: '#000000',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      animation: {
        'scroll-1': 'scrolling-1 1100s linear infinite',
        'scroll-2': 'scrolling-2 1100s linear infinite',
      },
      keyframes: {
        'scrolling-1': {
          '0%': { transform: 'translateX(-27000.5px)' },
          '100%': { transform: 'translateX(28781.5px)' },
        },
        'scrolling-2': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-28781.5px)' },
        },
      },
    },
  },
  plugins: [],
}