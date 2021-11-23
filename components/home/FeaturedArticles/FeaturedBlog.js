import BlogCard from "./BlogCard";

const FeaturedBlog = () => {
  return (
    <div className="home-blog-area section-padding30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle mb-100">
              <span>Recent News, Announcements & Articles</span>
              <h2>Our Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <BlogCard
            blogLink="/blog"
            title="What is Quick Data Loader and how does it speed up everything?"
            description="Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magnua Quis ipsum suspendisse
                    ultrices gra."
            image="/static/img/gallery/workingBlog.jpg"
            readMoreLink="Read more about QDL"
          />
          <BlogCard
            blogLink="/blog"
            title="What is MAX Workbench?"
            description="Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magnua Quis ipsum suspendisse
                    ultrices gra."
            image="/static/img/gallery/colabCPU.jpg"
            readMoreLink="Read more about MAX Workbench"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
