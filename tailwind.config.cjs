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
        heading: "'SF Pro Display', sans-serif",
        text: "'SF Pro Text', sans-serif",
        link: "'SF Pro Text', sans-serif",
        sans: "'SF Pro Text', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
