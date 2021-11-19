import HeroButton from "./HeroButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="slider-area hero-custom">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="hero__caption" style={{ marginTop: "5rem" }}>
                <span>WE HAVE A SOLUTION FOR YOU</span>
                <h1>Balance Point Technologies</h1>
                <p>
                  Balance Point Technologies, a reputed consulting and services
                  provider, has been building, customizing, and supporting
                  applications for MAX ERP since 1996. Our tools save time and
                  increase productivity and if you have a specific or custom
                  requirement, we have a solution for you. Start optimizing with
                  MAX Toolkit or a custom solution for Dynamic GP today.
                </p>
                <div className="d-flex justify-content-around col-xl-10 col-lg-10 col-md-12 d-xs-none d-block ml-5 mb-5">
                  <HeroButton
                    link="/company"
                    title="Learn About What We Offer"
                  />
                  <HeroButton link="/contact" title="Contact Us " />
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
