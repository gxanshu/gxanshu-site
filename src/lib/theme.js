import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading:
      "GT Walsheim, Helvetica Neue, Helvetica, ubuntu, Arial, sans-serif",
    body: "GT Walsheim, Helvetica Neue, Helvetica, ubuntu, Arial, sans-serif",
  },
  colors: {
    brand: {
      yellow: "#FFD600",
      blue: "#00D1FF",
      white: "#FFFFFF",
      grayLite: "#CAE8FD",
      grayDark: "#4C7296",
      bg: "#001936",
    },
  },
});

export default theme;
