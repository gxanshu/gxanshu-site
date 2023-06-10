module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        heading: "'Space Grotesk', sans-serif",
        text: "'Space Grotesk', sans-serif",
        link: "'Space Grotesk', sans-serif",
        sans: "'Space Grotesk', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
