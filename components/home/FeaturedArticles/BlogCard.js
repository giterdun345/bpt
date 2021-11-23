import Link from "next/link";

const BlogCard = ({ image, title, blogLink, description, readMoreLink }) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="home-blog-single mb-30">
        <div className="blog-img-cap">
          <div className="blog-img">
            <img
              src={image}
              alt="blog generic image"
              style={{ maxHeight: "353px" }}
            />
          </div>
          <div className="blog-cap">
            <h3>
              <Link href={blogLink}>{title}</Link>
            </h3>
            <p>{description}</p>
            <Link href={blogLink} className="more-btn">
              {readMoreLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
