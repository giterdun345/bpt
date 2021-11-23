import Link from "next/link";

const MoreServices = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="support-location-img">
            <img
              src="/static/img/gallery/about.jpg"
              alt="two men collaborating on the computer in a warehouse"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="right-caption">
            <div className="section-tittle section-tittle2 mb-50">
              <span>Customer Success Is Our Most Important Objective</span>
              <h2 style={{ fontSize: "2.4rem" }}>
                We have a solution for you.
              </h2>{" "}
            </div>
            <div className="support-caption">
              <p className="pera-top">
                Start optimizing with Balance Point Technologies’ MAX Toolkit or
                Dynamic GP add-ons today. We offer an extensive range of cost
                effective products delivered by a team with technical
                excellence. With efficiency of staff and operations always being
                a concern for any organization, we ensure you are provided with
                a tool that is well suited to your needs and increases your user
                productivity. We put a high value on transparency and extensive
                communication to make sure the needs and expectations of every
                client are met.
              </p>
              <p className="pera-top">
                We add real value to client satisfaction through domain
                expertise and solutions with proven success. We have delivered
                consulting services, custom development, and standard
                applications since 1996
              </p>
              <Link href="/services">
                <button className="button_slide slide_down">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
