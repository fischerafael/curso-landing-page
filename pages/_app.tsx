import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Curso de React - Construa sua Landing Page</title>
        <link rel="shortcut icon" href="/logo/react-icon.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
