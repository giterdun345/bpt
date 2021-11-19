import HeroButton from "./HeroButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="slider-area hero-custom">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-8">
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
                <HeroButton link="/contact" title="Contact Us For A Quote" />
                <div className="hero__btn">
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
  );
};

export default Hero;
