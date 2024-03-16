/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      ss: { max: '1030px' },
      s: '820px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      dark: "#232a3c",
      medium: "#293245",
      black: {
        500: '#000000',
      },
      gray: {
        100: '#A4A69C',
        200: '#dcdcde',
        300: '#4C594F'
      },
      white: {
        500: '#ffffff',
      },
      blue: {
        100: '#6274e5',
        200: '#4a64d2',
        300: '#3155c0',
        400: '#1945ad',
        500: '#00359a',
        600: '#4F5E8C'
      },
      purple: {
        500: '#9400D3',
      },
      red: {
        500: '#FF0000'
      },
      yellow: { 
        500: '#ffff00', 
      },

    },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
