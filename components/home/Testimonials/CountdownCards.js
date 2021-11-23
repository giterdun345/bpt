const CountdownCards = () => {
  return (
    <div className="count-down-area pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-6">
            {/* Counter Up */}
            <div className="single-counter text-center">
              <span className="counter">8705</span>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            {/* Counter Up */}
            <div className="single-counter active text-center">
              <span className="counter">480</span>
              <p> Active Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            {/* Counter Up */}
            <div className="single-counter text-center">
              <span className="counter">626</span>
              <p>Cups of Coffee</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            {/* Counter Up */}
            <div className="single-counter text-center">
              <span className="counter">9774</span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownCards;
