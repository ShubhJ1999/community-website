import React from "react";
import RecentPost from "../RecentPost/RecentPost";
import PopularPost from "../PopularPost/PopularPost";
import SomeBlogs from "../SomeBlogs/SomeBlogs";
import "./Home.css";
import { Link } from "react-router-dom";
import TopBlogger from "../TopBlogger/TopBlogger";
import Cover from "../Cover/Cover";

const Home = () => {
  return (
    <>
      <Cover />
      <div className="container">
        <div className="first-section">
          <div className="recent-post-area">
            <RecentPost />
          </div>
          <div className="top-blogger-area">
            <h3 className="top-blogger-title">Top Blogger</h3>
            <TopBlogger />
          </div>
        </div>
        <div className="second-section">
          <h3 className="pop-title">Popular Posts</h3>
          <hr />
          <PopularPost />
        </div>
        <div className="third-section">
          <h3 className="all-title">Recent Posts</h3>
          <hr className="recent-line" />
          <SomeBlogs />
          <Link to="/all-blogs" className="all-blogs-link">
            <h5 className="see-more">See More</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
