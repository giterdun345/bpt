import HeaderLogo from "./HeaderLogo";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const HeaderBottom = () => {
  return (
    <div className="header-bottom header-sticky">
      <div className="container">
        <div className="row align-items-center" style={{ marginTop: "1rem" }}>
          <HeaderLogo />
          <div className="col-xl-12 col-lg-12">
            <div className="menu-wrapper d-flex align-items-center justify-content-end">
              <MainMenu />
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
