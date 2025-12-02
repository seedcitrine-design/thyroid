/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'memphis-coral': '#FF6F61',
        'memphis-purple': '#6B5B95',
        'memphis-green': '#88B04B',
        'memphis-pink': '#F7CAC9',
        'memphis-yellow': '#FFD662',
        'memphis-blue': '#5B9BD5',
        'memphis-orange': '#FF9F40',
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
