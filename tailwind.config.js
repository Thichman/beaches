module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          backgroundImage: {
            'hero-pattern': '/public/beachimg.jpeg',
          }
        }
      }
    }
  },
  plugins: [],
}
