import Link from "next/link";

const MainMenu = () => {
  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul className="main-menu-text">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
            <ul className="submenu">
              <li>
                <Link href="blog.html">Blog</Link>
              </li>
              <li>
                <Link href="blog_details.html">Blog Details</Link>
              </li>
              <li>
                <Link href="elements.html">Element</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
