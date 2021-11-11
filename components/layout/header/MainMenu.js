const MainMenu = () => {
  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul id="navigation">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
            <ul className="submenu">
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog_details.html">Blog Details</a>
              </li>
              <li>
                <a href="elements.html">Element</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
