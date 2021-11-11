import Link from "next/link";
const SideNav = (props) => {
  return (
    <div className="container-fluid min-vh-100 expandable rounded-0">
      <ul className="d-flex flex-column align-items-center sidenav-ul">
        <Link className="sidenav-links" href="/">
          <li className="align-self-center sidenav-li">Home</li>
        </Link>
        <Link className="sidenav-links" href="/company">
          <li className="align-self-center sidenav-li">Company</li>
        </Link>
        <Link className="sidenav-links" href="/services">
          <li className="align-self-center sidenav-li">Services</li>
        </Link>
        <Link className="sidenav-links" href="/blog">
          <li className="align-self-center sidenav-li">Blog</li>
        </Link>
        <Link className="sidenav-links" href="/contact">
          <li className="align-self-center sidenav-li">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
