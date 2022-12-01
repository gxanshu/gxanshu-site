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
        heading: "'MarkPro', sans-serif",
        text: "'CircularStd', sans-serif",
        link: "'DINCondensed', sans-serif",
        sans: "'CircularStd', sans-serif",
      },
    },
  },
  plugins: [],
};
