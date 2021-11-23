import { Carousel } from "react-bootstrap";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const backgroundImage = (
    <img
      className="d-block w-100 carousel-image"
      src="/static/img/gallery/section_bg04.jpg"
      alt="Background image for carousel"
    />
  );

  const nextIcon = (
    <span aria-hidden="true" className="carousel-control-next-icon prev" />
  );
  const prevIcon = (
    <span aria-hidden="true" className="carousel-control-prev-icon next" />
  );

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ width: "105vw" }}
    >
      <div className="col-xl-12 col-lg-12 col-md-12">
        <Carousel
          fade
          nextIcon={nextIcon}
          prevIcon={prevIcon}
          wrap={true}
          touch={true}
          slide={true}
          pause="hover"
          keyboard={true}
          indicators={false}
          interval={8000}
        >
          <Carousel.Item style={{ position: "relative", maxHeight: "1026px" }}>
            {backgroundImage}
            <Testimonial
              company="First Company"
              logo="/static/img/gallery/Homepage_testi.png"
              reviewer="First Reviewer"
              review="Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis por incididunt ut labore et dolore mas.
                "
            />
          </Carousel.Item>
          <Carousel.Item>
            {backgroundImage}
            <Testimonial
              company="Second Company"
              logo="/static/img/gallery/Homepage_testi.png"
              reviewer="Second Reviewer"
              review="Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis por incididunt ut labore et dolore mas.
                "
            />
          </Carousel.Item>
          <Carousel.Item>
            {backgroundImage}

            <Testimonial
              company="Third Company"
              logo="/static/img/gallery/Homepage_testi.png"
              no_reviewer="Third Reviewer"
              review="Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis por incididunt ut labore et dolore mas.
                "
            />
          </Carousel.Item>
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

{
  /* <div
className="testimonial-area testimonial-padding"
style={{ backgroundImage: "url('/static/img/gallery/section_bg04.jpg')" }}
>
<div className="container ">
  <div className="row d-flex justify-content-center">
    <div className="col-xl-10 col-lg-10 col-md-9">
    <div className="h1-testimonial-active">
    ccc    
    <div className="single-testimonial text-center">
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
            <div className="testimonial-founder d-flex align-items-center justify-content-center">
              <div className="founder-img">
                <img src=*alt />
              </div>
              <div className="founder-text">
                <span>Jessya Inn</span>
                <p>Chif Photographer</p>
              </div>
            </div>
          </div>
        </div>


        ccc
        <div className="single-testimonial text-center">
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
                labore et dolore mas.
              </p>
            </div>
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
</div> */
}
