import Image from "next/image";
import Link from "next/link";
// import Logo from "../../../public/static/img/logo";

const HeaderLogo = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="logo">
        <Link href="/">
          <Image
            src={"/static/img/logo/BPT_Logo.jpg"}
            layout="responsive"
            height={200}
            width={700}
            priority
            alt="Balance Point Technologies logo"
            className="logo-image"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
