import React, { useState } from "react";
import Cover from "../Cover/Cover";
import RecentPost from "../RecentPost/RecentPost";
import PopularPost from "../PopularPost/PopularPost";
import { Interests } from "../../constants/Interests";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [catagory, setCatagory] = useState(true);

  const changePosition = () => {
    if (window.scrollY >= 1000) {
      setCatagory(false);
    } else {
      setCatagory(true);
    }
  };

  window.addEventListener("scroll", changePosition);

  return (
    <>
      <Navbar />
      <div className="base-area">
        <div className="cover-area">
          <Cover />
        </div>

        <div className="main-area">
          <div
            className={
              catagory ? `interest-container active` : `interest-container`
            }
          >
            <h3 className="interest-catagory">Catagories</h3>
            <hr className="h-line" />
            <div className="interest-sub-container">
              {Interests.map((item) => {
                return (
                  <p className="interest-link" key={item.id}>
                    {item.name}
                  </p>
                );
              })}
            </div>
            <Link to="/all-blogs" className="see-more-link">
              See More...
            </Link>
          </div>
          <div className="post-container">
            <RecentPost />
            <Link to="/all-blogs" className="see-page-link bottom-link">
              See All Blogs...
            </Link>
          </div>
          <div className="popular-container">
            <h3 className="popular-post-heading">Popular Posts</h3>
            <hr />
            <PopularPost />
            <Link to="/all-blogs" className="see-page-link bottom-link">
              See All Blogs...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
