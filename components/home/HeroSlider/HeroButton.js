import Link from "next/link";

const HeroButton = ({ link, title }) => {
  return (
    <div className="hero__btn" data-animation="fadeInLeft" data-delay="1.1s">
      <Link href={link} className="btn hero-btn">
        {title}
      </Link>
    </div>
  );
};

export default HeroButton;
