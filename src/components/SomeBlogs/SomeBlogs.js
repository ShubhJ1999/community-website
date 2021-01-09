import React, { useContext } from "react";
import "./SomeBlogs.css";
import { BlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

const SomeBlogs = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="some-main-container">
      {/* {blogs.slice(0, 6).map((item, index) => { */}
      {blogs.map((item, index) => {
        return (
          <div className="some-post-container" key={index}>
            <div className="some-post-details">
              <div className="some-article-detail">
                <p className="some-article-catagory">{item.slug}</p>
              </div>
              <Link
                to={`/specific-blog/${item.id}`}
                className="pop-specific-link"
              >
                <h4>{item.title}</h4>
                <p className="some-description">{item.content}</p>
                <p>1 Dec • 5 Min Read</p>
              </Link>
            </div>
            <div className="some-post-img">
              <Link to={`/specific-blog/${item.id}`}>
                <img
                  src="https://images.unsplash.com/photo-1609507719752-c5ee71ef1705?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="img"
                  className="some-image"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SomeBlogs;
