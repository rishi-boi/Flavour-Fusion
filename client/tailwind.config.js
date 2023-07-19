/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#C58940',
        'secondary':'#E5BA73',
        'input':'#FAEAB1',
        'bg':'#FAF8F1',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        move: 'move 4s linear',
      }
    },
  },
  plugins: [],
}

