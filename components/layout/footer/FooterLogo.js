import Link from "next/link";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
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
  );
};

export default FooterLogo;
