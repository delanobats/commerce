/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'transparent': 'transparent',
      'hero-bg': 'rgba(5, 9, 18, .5)',
      'blue-50': 'rgb(231, 232, 234)',
      'blue-100': 'rgb(179, 182, 189)',
      'blue-200': 'rgb(143, 147, 157)',
      'blue-300': 'rgb(92, 98, 113)',
      'blue-400': 'rgb(60, 68, 85)',
      'light-bg': 'rgba(179, 182, 189, .1)',
      'blue-500': 'rgb(11, 21, 43)',
      'blue-600': 'rgb(10, 19, 39)',
      'blue-700': 'rgb(8, 15, 31)',
      'blue-800': 'rgb(6, 12, 24)',
      'blue-900': 'rgb(5, 9, 18)',
      'orange-50': 'rgb(254, 236, 232)',
      'orange-100': 'rgb(252, 195, 182)',
      'orange-200': 'rgb(250, 166, 147)',
      'orange-300': 'rgb(248, 126, 98)',
      'orange-400': 'rgb(246, 101, 68)',
      'orange-500': 'rgb(244, 62, 21)',
      'orange-600': 'rgb(222, 56, 19)',
      'orange-700': 'rgb(173, 44, 15)',
      'orange-800': 'rgb(134, 34, 12)',
      'orange-900': 'rgb(102, 26, 9)',
      'white-50': 'rgb(255, 255, 255)',
      'white-100': 'rgb(254, 254, 255)',
      'white-200': 'rgb(253, 253, 255)',
      'white-300': 'rgb(252, 252, 255)',
      'white-400': 'rgb(252, 252, 255)',
      'white-500': 'rgb(251, 251, 255)',
      'white-600': 'rgb(228, 228, 232)',
      'white-700': 'rgb(178, 178, 181)',
      'white-800': 'rgb(138, 138, 140)',
      'white-900': 'rgb(105, 105, 107)',
      'dialog-bg': 'rgba(0, 0, 0, .4)',
    },
    fontFamily: {
      sans: ['Teko', 'sans-serif'],
      cursive: ['Yellowtail', 'cursive'],
    },
    fontSize: {
      'heading-lg': '48px',
      'heading-md': '34px',
      'heading-sm': '28px',
      'body-lg': '21px',
      'body-md': '18px',
      'body-sm': '16px',
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    },
    borderRadius: {
      'none': '0',
      'sm': '2px',
      'DEFAULT': '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '12px',
      '2xl': '16px',
      '3xl': '24px',
      'full': '9999px',
      'large': '12px',
    },
    backgroundImage: {
      'flow-bg': "url('/flow-bg.webp')",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
