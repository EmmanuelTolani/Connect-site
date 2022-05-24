import "../styles/styles.scss";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
  <Component {...pageProps} />;
  </>
}

export default MyApp;
