/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      honey: '#FBBF24',
      beech: '#78350F',
      ambergold: '#A16207',
      creamy: '#FFFBEB',
      palehoney: '#FDE68A',
      offwhite: '#FAF9F6',
      graphite: '#111827',
    }
    },
    fontFamily: {
        sans: ['Lato', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
  },
  plugins: [],
}
