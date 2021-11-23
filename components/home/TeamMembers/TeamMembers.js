const TeamMembers = () => {
  return (
    <div className="team-area section-padding30">
      <div className="container">
        <div className="row">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            {/* Section Tittle */}
            <div className="section-tittle mb-70">
              <span>Our Professional members </span>
              <h2>Our Team Mambers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* single Tem */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="/static/img/gallery/team2.png" alt />
              </div>
              <div className="team-caption">
                <h3>
                  <a href="#">Ethan Welch</a>
                </h3>
                <span>UX Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="/static/img/gallery/team3.png" alt />
              </div>
              <div className="team-caption">
                <h3>
                  <a href="#">Ethan Welch</a>
                </h3>
                <span>UX Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
            <div className="single-team mb-30">
              <div className="team-img">
                <img src="/static/img/gallery/team1.png" alt />
              </div>
              <div className="team-caption">
                <h3>
                  <a href="#">Ethan Welch</a>
                </h3>
                <span>UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
