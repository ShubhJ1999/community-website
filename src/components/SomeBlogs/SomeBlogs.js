import React, { useContext } from "react";
import "./SomeBlogs.css";
import { BlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

const SomeBlogs = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="some-main-container">
      {blogs.slice(0, 6).map((item, index) => {
        return (
          <div className="some-post-container" key={index}>
            <div className="some-post-details">
              <div className="some-article-detail">
                <p className="some-article-catagory">Technology</p>
              </div>
              <h4>{item.title}</h4>
              <p className="some-description">{item.content}</p>
              <p>1 Dec • 1 min Read</p>
            </div>
            <div className="some-post-img">
              <img src={item.thumb} alt="img" className="some-image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SomeBlogs;
