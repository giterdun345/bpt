import { useState } from "react";
import Link from "next/link";
import HeroButton from "./HeroButton";
import Carousel from "react-bootstrap/Carousel";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      pause="hover"
      touch={true}
      wrap={true}
      variant="dark"
      className=" hero-carousel"
    >
      <Carousel.Item interval={4000}>
        <div className="container ">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-8">
              <div className="hero__caption">
                <span>We have a solution for you</span>
                <h1>BALANCE POINT TECHNOLOGIES</h1>
                <p>
                  Providing Consulting Services, Custom Development and Standard
                  Applications for MAX and Dynamics GP since 1996
                </p>
                <HeroButton link="/contact" title="Contact Us For A Quote" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
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
                  technical excellence. With efficiency of staff and operations
                  always being a concern for any organization, we ensure you are
                  provided with a tool that is well suited to your needs
                  increasing MAX user productivity. We put a high value on
                  transparency and extensive communication to make sure the
                  needs and expectations of every client are covered.
                </p>
                <HeroButton link="/contact" title="Contact Us For A Quote" />
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
      </Carousel.Item>
      <Carousel.Item interval={3000}>
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
                <HeroButton link="/contact" title="Contact Us For A Quote" />
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
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;

{
  /* <div
      id="heroSlider"
      class="carousel slide"
      data-bs-ride="carousel"
      id="heroSlides"
      data-interval="10000"
      keyboard={true}
      pause="hover"
      data-bs-touch="true"
    >
      <div class="carousel-indicators carousel-fade">
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner  w-100 img-fluid">
        <div class="carousel-item active">
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
                  <HeroButton link="/contact" title="Contact Us For A Quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item  w-100 img-fluid">
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
                    sure the needs and expectations of every client are covered.
                  </p>
                  <HeroButton link="/contact" title="Contact Us For A Quote" />
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
        <div class="carousel-item  w-100 img-fluid">
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
                  <HeroButton link="/contact" title="Contact Us For A Quote" />
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
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> */
}
