/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ss: { max: '1030px'},
      s:  '820px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black: {
        500: '#000000',
      },
      gray: {
        200: '#dcdcde',
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
      },
      purple: {
        500: '#9400D3',
      },
      red: {
        500: '#FF0000'
      }
    
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
