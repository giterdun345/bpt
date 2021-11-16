import FooterLogo from "./FooterLogo";
import ContactInfo from "./ContactInfo";
import ColumnLinks from "./ColumnsLinks";
import FooterForm from "./FooterForm";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-area section-bg"
        data-background="/static/img/gallery/footer_bg.jpg"
      >
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <FooterLogo />
                  <ContactInfo />
                </div>
              </div>
              <ColumnLinks />
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Location</h4>
                    <div className="footer-pera">
                      <p className="info1">
                        Subscribe now to get daily updates
                      </p>
                    </div>
                  </div>
                  {/* Form */}
                  <FooterForm />
                </div>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
      {/* Footer End */}
    </footer>
  );
};

export default Footer;

{
  /* <footer>
    <div className={`${styles.footerArea} section-bg`} data-background="static/img/gallery/footer_bg.jpg">
        <div className={styles.container}>
            <div className={cx(styles.footerTop, styles.footerPadding)}>
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                        <div className={`${styles.singleFooterCaption} mb-50`}>
                     
                            <div className={styles.footerLogo}>
                                <a href="index.html">
                                    logo                                
                                </a>
                            </div>
                            <div className={styles.footerTittle}>
                                <div className={styles.footerPera}>
                                    <p className={styles.info1}>Receive updates and latest news direct from Simply enter.</p>
                                </div>
                            </div>
                            <div className={styles.footerNumber}>
                                <h4><span>+564 </span>7885 3222</h4>
                                <p>youremail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                        <div className={`${styles.singleFooterCaption} mb-50`}>
                            <div className={styles.footerTittle}>
                                <h4>Location </h4>
                                <ul>
                                    <li><a href="#">Advanced</a></li>
                                    <li><a href="#"> Management</a></li>
                                    <li><a href="#">Corporate</a></li>
                                    <li><a href="#">Customer</a></li>
                                    <li><a href="#">Information</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                        <div className={`${styles.singleFooterCaption} mb-50`}>
                            <div className={styles.footerTittle}>
                                <h4>Explore</h4>
                                <ul>
                                    <li><a href="#">Cookies</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Proparties</a></li>
                                    <li><a href="#">Licenses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                        <div className={`${styles.singleFooterCaption} mb-50`}>
                            <div className={styles.footerTittle}>
                                <h4>Location</h4>
                                <div className={styles.footerPera}>
                                    <p className={styles.info1}>Subscribe now to get daily updates</p>
                                </div>
                            </div>
                         
                            <div className={styles.footerForm}>
                                <div id="mc_embed_signup">
                                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" novalidate="true">
                                        <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"/>
                                        <div className={styles.formIcon}>
                                            <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                SIGN UP
                                            </button>
                                        </div>
                                        <div className={`mt-10 ${styles.info}`}></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-xl-9 col-lg-8">
                        <div className={styles.footerCopyRight}>
                            <p>copyright</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className={cx(styles.footerSocial, styles.fRight)}>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fas fa-globe"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer> */
}
