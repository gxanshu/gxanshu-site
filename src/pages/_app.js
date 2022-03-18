import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import Navbar from "container/Navbar";
import Footer from "container/Footer";
import "../../styles/globals.css";
import theme from "lib/theme";
import { prismLightTheme, prismDarkTheme } from "utils/prism";
import { Global, css } from "@emotion/react";
import Progress from "components/loader";
import React from "react";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Progress />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
