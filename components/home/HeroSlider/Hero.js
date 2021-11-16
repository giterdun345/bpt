import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div className="slider-area ">
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
                  <HeroButton link="/contact" title="Contact Us For A Quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide2 */}
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
                    sure the needs and expectations of every client are covered.
                  </p>
                  <HeroButton
                    link="/services"
                    title="Read About Our Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
