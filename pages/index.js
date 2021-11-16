import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// components
import Hero from "../components/home/HeroSlider/Hero";
import HeroButton from "../components/home/HeroSlider/HeroButton";
export default function Home() {
  return (
    <>
      <Head>
        <title>BPT: Home</title>
        <link rel="stylesheet" href="./static/css/style.css" />
      </Head>
      <Hero />
      {/* <div className="slider-area ">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      We have a solution for you
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      Balance Point Technologies
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      Providing Consulting Services, Custom Development and
                      Standard Applications for MAX and Dynamics GP since 1996
                    </p>
                    <HeroButton
                      link="/contact"
                      title="Contact Us For A Quote"
                    />
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay="1.1s"
                    >
                      <Link href="/contact" className="btn hero-btn">
                        Contact Us For A Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          Slide2
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      Have an idea to optimize your workflow?
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      Learn about what we offer
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      Start optimizing with MAX Toolkit or a custom solution for
                      Dynamic GP today. We offer an extensive range of cost
                      effective products to help you delivered by a team with
                      technical excellence. With efficiency of staff and
                      operations always being a concern for any organization, we
                      ensure you are provided with a tool that is well suited to
                      your needs increasing MAX user productivity. We put a high
                      value on transparency and extensive communication to make
                      sure the needs and expectations of every client are
                      covered.
                    </p>
                    <HeroButton
                      link="/services"
                      title="Read About Our Services"
                    />
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay="1.1s"
                    >
                      <Link href="/services" className="btn hero-btn">
                        Read More About Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      Have an idea to optimize your workflow?
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      Learn about what we offer
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      Start optimizing with MAX Toolkit or a custom solution for
                      Dynamic GP today. We offer an extensive range of cost
                      effective products to help you delivered by a team with
                      technical excellence. With efficiency of staff and
                      operations always being a concern for any organization, we
                      ensure you are provided with a tool that is well suited to
                      your needs increasing MAX user productivity. We put a high
                      value on transparency and extensive communication to make
                      sure the needs and expectations of every client are
                      covered.
                    </p>
                    <HeroButton
                      link="/services"
                      title="Read About Our Services"
                    />
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay="1.1s"
                    >
                      <Link href="/services" className="btn hero-btn">
                        Read More About Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*? Categories Area Start */}
      <div className="categories-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Tittle */}
              <div className="section-tittle mb-70">
                <span>Our Top Services</span>
                <h2>Our Best Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-development" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Strategy Planning </a>
                  </h5>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-result" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Insurance Service</a>
                  </h5>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-team" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Audit &amp; Evaluation</a>
                  </h5>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Area End */}
      {/*? About Area Start*/}
      <div
        className="support-company-area pt-100 pb-100 section-bg fix"
        data-background="/static/img/gallery/section_bg02.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img src="/static/img/gallery/about.png" alt />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                {/* Section Tittle */}
                <div className="section-tittle section-tittle2 mb-50">
                  <span>Our Top Services</span>
                  <h2>Our Best Services</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                    ess cillum dolore egru lofrre dsu quality mollit anim
                    laborumuis au dolor in voluptate velit cillu.
                  </p>
                  <p className="mb-65">
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate velit esscillumlore eu quife nrulla
                    parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                    iruxvfg dhjinulpadeserunt moll.
                  </p>
                  <a href="about.html" className="btn post-btn">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area End*/}
      {/*? Services Ara Start */}
      <div className="services-area section-padding3">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittle mb-70">
                <span>Our Portfolios of cases</span>
                <h2>Featured Case Study</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <img src="/static/img/gallery/services1.png" alt />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <img src="/static/img/gallery/services2.png" alt />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <img src="/static/img/gallery/services3.png" alt />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="single-services mb-100">
                <div className="services-img">
                  <img src="/static/img/gallery/services4.png" alt />
                </div>
                <div className="services-caption">
                  <span>Strategy planing</span>
                  <p>
                    <a href="#">
                      Within the construction industry as their overdraft
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Ara End */}
      {/*? Testimonial Start */}
      <div
        className="testimonial-area testimonial-padding"
        data-background="/static/img/gallery/section_bg04.jpg"
      >
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-9">
              <div className="h1-testimonial-active">
                {/* Single Testimonial */}
                <div className="single-testimonial text-center">
                  {/* Testimonial Content */}
                  <div className="testimonial-caption ">
                    <div className="testimonial-top-cap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="67px"
                        height="49px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(240, 78, 60)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis por incididunt ut
                        labore et dolore mas.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <img src="/static/img/gallery/Homepage_testi.png" alt />
                      </div>
                      <div className="founder-text">
                        <span>Jessya Inn</span>
                        <p>Chif Photographer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Testimonial */}
                <div className="single-testimonial text-center">
                  {/* Testimonial Content */}
                  <div className="testimonial-caption ">
                    <div className="testimonial-top-cap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="67px"
                        height="49px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(240, 78, 60)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis por incididunt ut
                        labore et dolore mas.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <img src="/static/img/gallery/Homepage_testi.png" alt />
                      </div>
                      <div className="founder-text">
                        <span>Jessya Inn</span>
                        <p>Chif Photographer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Coun Down Start */}
      <div className="count-down-area pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/* Counter Up */}
              <div className="single-counter text-center">
                <span className="counter">8705</span>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/* Counter Up */}
              <div className="single-counter active text-center">
                <span className="counter">480</span>
                <p> Active Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/* Counter Up */}
              <div className="single-counter text-center">
                <span className="counter">626</span>
                <p>Cups of Coffee</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/* Counter Up */}
              <div className="single-counter text-center">
                <span className="counter">9774</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coun Down End */}
      {/* Team Start */}
      <div className="team-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittle mb-70">
                <span>Our Professional members </span>
                <h2>Our Team Mambers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* single Tem */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="/static/img/gallery/team2.png" alt />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Ethan Welch</a>
                  </h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="/static/img/gallery/team3.png" alt />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Ethan Welch</a>
                  </h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="/static/img/gallery/team1.png" alt />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Ethan Welch</a>
                  </h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Want To work */}
      <section
        className="wantToWork-area w-padding2 section-bg"
        data-background="/static/img/gallery/section_bg03.jpg"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>
                  Are you Searching
                  <br /> For a First-Class Consultant?
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <a href="#" className="btn btn-black f-right">
                More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Want To work End */}
      {/* Blog Area Start */}
      <div className="home-blog-area section-padding30">
        <div className="container">
          {/* Section Tittle */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-100">
                <span>Recent News of us</span>
                <h2>Our Recent Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="home-blog-single mb-30">
                <div className="blog-img-cap">
                  <div className="blog-img">
                    <img src="/static/img/gallery/home_blog1.png" alt />
                    <ul>
                      <li>By Admin - October 27, 2020</li>
                    </ul>
                  </div>
                  <div className="blog-cap">
                    <h3>
                      <a href="blog_details.html">
                        16 Easy Ideas to Use in Everyday
                      </a>
                    </h3>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magnua Quis ipsum
                      suspendisse ultrices gra.
                    </p>
                    <a href="blog_details.html" className="more-btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="home-blog-single mb-30">
                <div className="blog-img-cap">
                  <div className="blog-img">
                    <img src="/static/img/gallery/home_blog2.png" alt />
                    <ul>
                      <li>By Admin - October 27, 2020</li>
                    </ul>
                  </div>
                  <div className="blog-cap">
                    <h3>
                      <a href="blog_details.html">
                        16 Easy Ideas to Use in Everyday
                      </a>
                    </h3>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magnua Quis ipsum
                      suspendisse ultrices gra.
                    </p>
                    <a href="blog_details.html" className="more-btn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}
      {/* Brand Area Start */}
      <div className="brand-area pb-140">
        <div className="container">
          <div className="brand-active brand-border pb-40">
            <div className="single-brand">
              <img src="/static/img/gallery/brand1.png" alt />
            </div>
            <div className="single-brand">
              <img src="/static/img/gallery/brand2.png" alt />
            </div>
            <div className="single-brand">
              <img src="/static/img/gallery/brand3.png" alt />
            </div>
            <div className="single-brand">
              <img src="/static/img/gallery/brand4.png" alt />
            </div>
            <div className="single-brand">
              <img src="/static/img/gallery/brand2.png" alt />
            </div>
            <div className="single-brand">
              <img src="/static/img/gallery/brand5.png" alt />
            </div>
          </div>
        </div>
      </div>
      {/* Brand Area End */}
    </>
  );
}
