import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "../../styles/globals.css";
import theme from "lib/theme";
import { prismLightTheme, prismDarkTheme } from "utils/prism";
import { Global, css } from "@emotion/react";
import React from "react";
import { Navbar, Footer } from "components";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("components/loader"));
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import * as gtag from 'lib/gtag';


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
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id="Adsense-id" data-ad-client="ca-pub-6691816550079346"
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load ads', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <Loader />
        </GlobalStyle>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
