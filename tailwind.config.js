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
    },
  },
  plugins: [],
}
