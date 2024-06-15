module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {
      width: {
        95: "90%",
      },
      colors: {
        lightGray: "#F2F2F2",
        ultraDarkGray: "#1F1F1F",
      },
      fontFamily: {
        heading: "'Inter', sans-serif",
        text: "'Inter', sans-serif",
        link: "'Inter', sans-serif",
        sans: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}