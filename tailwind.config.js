/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1a1a1a',
          700: '#0d0d0d',
          800: '#050505',
          900: '#000000',
        },
        gold: {
          100: '#fef7e7',
          200: '#fcefc7',
          300: '#f9e79f',
          400: '#f4d03f',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9c7a16',
          800: '#80620e',
        },
        cream: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f8f8f8',
          300: '#f5f5f5',
          400: '#f0f0f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}