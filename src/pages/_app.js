import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "../../styles/globals.css";
import theme from "lib/theme";
import { prismLightTheme, prismDarkTheme } from "utils/prism";
import { Global, css } from "@emotion/react";
import React from "react";
import { Navbar, Footer } from "components";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("components/loader"));

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
        <Loader />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
