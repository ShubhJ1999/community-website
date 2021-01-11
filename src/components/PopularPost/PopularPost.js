import React, { useContext } from "react";
import "./PopularPost.css";
import { BlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

const PopularPost = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="popular-main-container">
      {/* {blogs.slice(0, 4).map((item, index) => { */}
      {blogs.map((item, index) => {
        return (
          <div className="popular-post-container" key={index}>
            <div className="popular-post-img">
              <Link to={`/specific-blog/${item.id}`}>
                <img
                  src={`https://dhruvpythondev.pythonanywhere.com${item.image_url}`}
                  alt={item.title}
                  className="popular-image"
                />
              </Link>
            </div>
            <div className="popular-post-details">
              <div className="popular-article-detail">
                <p className="popular-article-catagory">{item.slug}</p>
              </div>
              <Link
                to={`/specific-blog/${item.id}`}
                className="pop-specific-link"
              >
                <h4>{item.title}</h4>
              </Link>
              <p className="popular-description">{item.content}</p>
              <p>1 Dec • 5 Min Read</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularPost;
