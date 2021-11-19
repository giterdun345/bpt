import Head from "next/head";
import { useEffect } from "react";
// components
import Preloader from "../components/layout/Preloader";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

import "../public/static/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "../public/static/css/fontawesome-all.min.css";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   typeof document !== undefined
  //     ? import("bootstrap/dist/js/bootstrap.bundle.js")
  //     : null;
  // }, []);

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="static/img/favicon.ico"
        />
      </Head>
      <Preloader />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      {/* <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script> */}
    </>
  );
}

export default MyApp;
