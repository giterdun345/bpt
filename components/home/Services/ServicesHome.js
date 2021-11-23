import ServicesCard from "./ServicesCard";

const ServicesHome = () => {
  return (
    <div className="categories-area section-padding30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle mb-70">
              <span>domain expertise &amp; solutions with proven success</span>
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* ome */}
          <ServicesCard
            icon="flaticon-development"
            title="Efficiency &amp; Results"
            paragraph="Our process-driven approaches and proven framework based implementations help us in delivering quality services at competitive pricing."
            link="/services"
          />
          {/* ome */}
          <ServicesCard
            icon="flaticon-result"
            title="Customized Add-on Tools"
            paragraph="Our MAX and GP add-on tools optimize our clients’ business processes and workflow. Get the most from our tools saving you time and money."
            link="/services"
          />
          {/* ome */}
          <ServicesCard
            icon="flaticon-team"
            title="Training &amp; Support"
            paragraph="We work with you and your team to combine  our technology that meets your needs. Teamwork + creativity is our mantra to deliver success."
            link="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
