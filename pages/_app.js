import Head from "next/head";
// components
import Preloader from "../components/layout/Preloader";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
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
        <link rel="stylesheet" href="./static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="./static/css/slicknav.css" />
        <link rel="stylesheet" href="./static/css/flaticon.css" />
        <link rel="stylesheet" href="./static/css/animate.min.css" />
        <link rel="stylesheet" href="./static/css/magnific-popup.css" />
        <link rel="stylesheet" href="./static/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="./static/css/themify-icons.css" />
        <link rel="stylesheet" href="./static/css/slick.css" />
        <link rel="stylesheet" href="./static/css/nice-select.css" />
        <link rel="stylesheet" href="./static/css/style.css" />

        {/* <meta name='description' content={description} />
        <link  rel='canonical' href = {url}  />   
        {image && <meta name= 'image' content={image} />}
        // for facebook and other websites og stands for open graph
        <meta property = "og:url" content={url} />
        <meta property = "og:type" content="website" />
        <meta property = "og:title" content={title} />
        <meta property = "og:description" content={description} />
        {image && <meta name='og:image' content={image} />}
        // for twitter 
        <meta name="twitter:card" content='summary_large_image' />
        <meta name="twitter:title" content= {title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name='twitter:image' content={image} />} */}
      </Head>
      <Preloader />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />

      {/* SCRIPTS  */}
      <script src="/static/js/vendor/modernizr-3.5.0.min.js"></script>
      {/* <!-- Jquery, Popper, Bootstrap --> */}
      <script src="/static/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="/static/js/popper.min.js"></script>
      <script src="/static/js/bootstrap.min.js"></script>
      {/* <!-- Jquery Mobile Menu --> */}
      {/* <script src="./static/js/jquery.slicknav.min.js"></script> */}
      {/* <!-- Jquery Slick , Owl-Carousel Plugins --> */}
      <script src="/static/js/owl.carousel.min.js"></script>
      <script src="/static/js/slick.min.js"></script>
      {/* <!-- One Page, Animated-HeadLin --> */}
      <script src="/static/js/wow.min.js"></script>
      <script src="/static/js/animated.headline.js"></script>
      <script src="/static/js/jquery.magnific-popup.js"></script>
      {/* <!-- Niceselect, sticky --> */}
      <script src="/static/js/jquery.nice-select.min.js"></script>
      <script src="/static/js/jquery.sticky.js"></script>
      {/* <!-- counter , waypoint --> */}
      <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      <script src="/static/js/jquery.counterup.min.js"></script>
      {/* <!-- Jquery Plugins, main Jquery -->	 */}
      <script src="/static/js/plugins.js"></script>
      <script src="/static/js/main.js"></script>
      {/* <!-- contact js --> */}
      {/* <script src="./static/js/contact.js"></script>
      <script src="./static/js/jquery.form.js"></script>
      <script src="./static/js/jquery.validate.min.js"></script>
      <script src="./static/js/mail-script.js"></script>
      <script src="./static/js/jquery.ajaxchimp.min.js"></script> */}
    </>
  );
}

export default MyApp;
