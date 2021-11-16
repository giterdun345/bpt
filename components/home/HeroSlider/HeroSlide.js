import { HeroButton } from "./HeroButton";

export const HeroSlide = (props) => {
  return (
    <div className="single-slider slider-height d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md-8">
            <div className="hero__caption">
              <span data-animation="fadeInLeft" data-delay=".1s">
                {props.subheadline}
              </span>
              <h1 data-animation="fadeInLeft" data-delay=".5s">
                {props.headline}
              </h1>
              <p data-animation="fadeInLeft" data-delay=".9s">
                {props.description}
              </p>
              <HeroButton link={props.buttonLink} title={props.buttonTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default HeroSlide;
