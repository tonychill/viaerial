import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalProvider, SearchProvider } from "../context";
import { Fragment } from "react";
import Layout from "../components/layout";
import NavBar from "../components/ui/NavBar";
import "tailwindcss/tailwind.css";

function ViAerial({ Component, pageProps }: AppProps) {
  const navlinks = [
    { text: "About Us", url: "/about-us" },
    { text: "Gallery", url: "/gallery" },
    { text: "UAV Services", url: "/services" },
    { text: "Contact Us", url: "/contact" },
    // { text: "More", url: "/mofe" },
  ];

  return (
    <Fragment>
      <GlobalProvider>
        <NavBar navLinks={navlinks} />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
      <div id="slider-portal"></div>
      <div id="modal-portal"></div>
    </Fragment>
  );
}

export default ViAerial;
