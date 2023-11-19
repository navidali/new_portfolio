import { ChakraProvider } from "@chakra-ui/react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/300.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" type="favicon" href="../public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
