const FooterForm = () => {
  return (
    <div className="footer-form">
      <div id="mc_embed_signup">
        <form
          target="_blank"
          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
          method="get"
          className="subscribe_form relative mail_part"
          noValidate="true"
        >
          <input
            type="email"
            name="EMAIL"
            id="newsletter-form-email"
            placeholder=" Email Address "
            className="placeholder hide-on-focus"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Your email address'"
          />
          <div className="form-icon">
            <button
              type="submit"
              name="submit"
              id="newsletter-submit"
              className="email_icon newsletter-submit button-contactForm"
            >
              SIGN UP
            </button>
          </div>
          <div className="mt-10 info" />
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
