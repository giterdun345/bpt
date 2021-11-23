import { Carousel } from "react-bootstrap";

const Testimonial = ({ company, logo, reviewer, review }) => {
  return (
    <Carousel.Caption className="carousel-caption">
      <div className="d-flex flex-row flex-nowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#fe6c2bff"
        >
          <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        </svg>
        <p style={{ color: "white" }}>{review}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#fe6c2bff"
        >
          <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
        </svg>
      </div>
      <div className=" d-flex align-items-center justify-content-center">
        <div className="founder-img">
          <img
            src={logo}
            alt={`logo image of ${company}`}
            style={{ marginRight: "1rem" }}
          />
        </div>
        <div>
          <span style={{ color: "smokewhite" }}>{reviewer}</span>
          <p style={{ color: "smokewhite" }}>{company}</p>
        </div>
      </div>
      {/* </div>
              </div>  */}
    </Carousel.Caption>
  );
};

export default Testimonial;
