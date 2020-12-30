import React from "react";
import RecentPost from "../RecentPost/RecentPost";
import PopularPost from "../PopularPost/PopularPost";
import SomeBlogs from "../SomeBlogs/SomeBlogs";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TopBlogger from "../TopBlogger/TopBlogger";
import Cover from "../Cover/Cover";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <div className="container">
        <div className="first-section">
          <div className="recent-post-area">
            <RecentPost />
          </div>
          <div className="top-blogger-area">
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
            <p>See More...</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
