// components
import HeaderInfoLeft from "./HeaderInfoLeft";
import HeaderInfoRight from "./HeaderInfoRight";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top d-none d-lg-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="column d-flex justify-content-between align-items-center">
                  <HeaderInfoLeft />
                  <HeaderInfoRight />
                </div>
              </div>
            </div>
          </div>
          <HeaderBottom />
        </div>
      </div>
    </header>
  );
};

export default Header;
