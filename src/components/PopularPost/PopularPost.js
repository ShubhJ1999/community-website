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
                  src="https://images.unsplash.com/photo-1602526212101-12eb978b129a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="img"
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
