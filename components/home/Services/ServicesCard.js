import Link from "next/link";

const ServicesCard = ({ icon, title, paragraph, link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-cat text-center mb-50">
        <div className="cat-icon">
          <span className={icon} />
        </div>
        <div className="cat-cap">
          <h5>
            <Link href={link}>{title}</Link>
          </h5>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
