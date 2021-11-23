const MiniTeam = () => {
  return (
    <>
      <section
        className="wantToWork-area w-padding2 section-bg"
        // data-background="/static/img/gallery/section_bg03.jpg"
        style={{
          backgroundImage: "url('/static/img/gallery/section_bg03.jpg')",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>
                  Are you Searching
                  <br /> For a First-Class Consultant?
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <a href="#" className="btn btn-black f-right">
                More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniTeam;
