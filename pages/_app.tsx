import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

import '../styles/globals.css';
import '@mantine/carousel/styles.css';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Ouest Rénovation</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="description" content="Ouest Rénovation - Votre expert en rénovation." />
        <meta name="keywords" content="rénovation, maison, Ouest Rénovation" />
        <meta name="author" content="Ouest Rénovation" />
        <meta property="og:title" content="Ouest Rénovation" />
        <meta property="og:description" content="Votre expert en rénovation." />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
  