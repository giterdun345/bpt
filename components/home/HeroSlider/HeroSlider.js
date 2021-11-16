import Link from "next/link";

import HeroButton from "./HeroButton";

const HeroSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval="10000"
      keyboard={true}
      pause="hover"
    >
      <ol className="carousel-indicators">
        <li data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active img-fluid ">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      We have a solution for you
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      BALANCE POINT TECHNOLOGIES
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      Providing Consulting Services, Custom Development and
                      Standard Applications for MAX and Dynamics GP since 1996
                    </p>
                    <HeroButton
                      link="/contact"
                      title="Contact Us For A Quote"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item d-block w-100 img-fluid ">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      Learn more about what we offer
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      MAX ERP & GP
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
                      link="/contact"
                      title="Contact Us For A Quote"
                    />
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay="1.1s"
                    >
                      <Link href="/contact" className="btn hero-btn">
                        Learn more about what we offer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item d-block w-100 img-fluid ">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-8">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">
                      Here is another one
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">
                      BPT
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".9s">
                      Next one
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
                        Do something else
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeroSlider;
