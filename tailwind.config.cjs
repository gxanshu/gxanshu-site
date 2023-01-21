module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        95: "90%",
      },
      colors: {
        blackBlue: "#10101a",
        grayBlue: "#171923",
        text: "#C4C4C4",
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
