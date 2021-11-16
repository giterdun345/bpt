import Link from "next/link";
const ColumnLinks = () => {
  return (
    <>
      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
        <div className="single-footer-caption mb-50">
          <div className="footer-tittle">
            <h4>Location </h4>
            <ul>
              <li>
                <Link href="#">Advanced</Link>
              </li>
              <li>
                <Link href="#"> Management</Link>
              </li>
              <li>
                <Link href="#">Corporate</Link>
              </li>
              <li>
                <Link href="#">Customer</Link>
              </li>
              <li>
                <Link href="#">Information</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
        <div className="single-footer-caption mb-50">
          <div className="footer-tittle">
            <h4>Location </h4>
            <ul>
              <li>
                <Link href="#">Advanced</Link>
              </li>
              <li>
                <Link href="#"> Management</Link>
              </li>
              <li>
                <Link href="#">Corporate</Link>
              </li>
              <li>
                <Link href="#">Customer</Link>
              </li>
              <li>
                <Link href="#">Information</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
        <div className="single-footer-caption mb-50">
          <div className="footer-tittle">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="#">Cookies</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Proparties</Link>
              </li>
              <li>
                <Link href="#">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnLinks;
