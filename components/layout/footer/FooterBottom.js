const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-xl-9 col-lg-8">
          <div className="footer-copy-right">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          {/* Footer Social */}
          <div className="footer-social f-right">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/sai4ull">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fas fa-globe" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
