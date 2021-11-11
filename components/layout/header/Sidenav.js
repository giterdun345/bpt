const SideNav = () => {
  return (
    <div className="container-fluid min-vh-100 expandable rounded-0">
      <ul className="d-flex flex-column align-items-center">
        <li className="align-self-center mb-5 mt-4">Home</li>
        <hr />
        <li className="align-self-center mb-5 mt-4">About</li>
        <hr />
        <li className="align-self-center mb-5 mt-4">Services</li>
        <hr />
        <li className="align-self-center mb-5 mt-4">Blog</li>
        <hr />
        <li className="align-self-center mb-5 mt-4">Contact</li>
        <hr />
      </ul>
    </div>
  );
};

export default SideNav;

{
  /* <div classNameName="col-12">
      <div classNameName="mobile_menu d-block d-lg-none">
        <div
          classNameName="slicknav_menu sidenav"
          style={{
            position: "absolute",
            // left: "-70vw",
            top: "8vw",
            float: "left",
            // margin: "auto",
            width: "100vw",
          }}
        >
          <ul
            classNameName="slicknav_nav sidenav"
            aria-hidden="false"
            role="menu"
            style={{ display: "block" }}
          >
            <li>
              <a href="index.html" role="menuitem" tabIndex={0}>
                Home
              </a>
            </li>
            <li>
              <a href="about.html" role="menuitem" tabIndex={0}>
                About
              </a>
            </li>
            <li>
              <a href="services.html" role="menuitem" tabIndex={0}>
                Services
              </a>
            </li>
            <li classNameName="slicknav_collapsed slicknav_parent">
              <a
                href="#"
                role="menuitem"
                aria-haspopup="true"
                tabIndex={0}
                classNameName="slicknav_item slicknav_row"
                style={{ outline: "none" }}
              />
              <a href="blog.html" tabIndex={0}>
                Blog
              </a>
              <span classNameName="slicknav_arrow">+</span>
              <ul
                classNameName="submenu slicknav_hidden"
                role="menu"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <li>
                  <a href="blog.html" role="menuitem" tabIndex={0}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="blog_details.html" role="menuitem" tabIndex={0}>
                    Blog Details
                  </a>
                </li>
                <li>
                  <a href="elements.html" role="menuitem" tabIndex={0}>
                    Element
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html" role="menuitem" tabIndex={0}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */
}
