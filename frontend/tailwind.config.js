/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-blue-gradient': {
          DEFAULT: 'linear-gradient(90deg, rgba(128, 0, 128, 1) 0%, rgba(0, 0, 255, 1) 100%)',
        },
      },
    },
  },
  plugins: [],
}
