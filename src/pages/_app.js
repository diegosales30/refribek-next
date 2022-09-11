import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";

import { GlobalStyle } from "../../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <TopFooter />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
