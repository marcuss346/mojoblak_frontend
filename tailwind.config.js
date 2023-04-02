/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '8%': '8%',
      '16': '4rem',
    },
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/user-solid.svg')",
      },
      animation: {
        fade: 'fadeOut 0.1s ease-in-out',
        spin: 'spin 1s linear infinite',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '100%': { backgroundColor: theme('color-[#EDE5A6]') },
          '0%': { backgroundColor: theme('colors.transparent') },
        },
        spin: {
          '100%': { transform: 'rotate(360deg)' },
          '0%': { transform: 'rotate(0deg)' }
        }
      }),
    },
  },
  plugins: [],
}
