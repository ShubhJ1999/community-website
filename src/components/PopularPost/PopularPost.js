import React, { useContext } from "react";
import "./PopularPost.css";
import { BlogContext } from "../../Context/BlogContext";

const PopularPost = ({ news }) => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="popular-main-container">
      {blogs.slice(0, 6).map((item, index) => {
        return (
          <div className="popular-post-container" key={index}>
            <div className="popular-post-img">
              <img src={item.urlToImage} alt="img" className="popular-image" />
            </div>
            <div className="popular-post-details">
              <h4>{item.title}</h4>
              <div className="popular-article-detail">
                <p className="popular-article-catagory">Technology</p>
                <p>
                  <li>Parth Maru</li>
                </p>
                <p>
                  <li>1 Jan 2020</li>
                </p>
              </div>
              <p className="popular-description">{item.description}</p>
              <a href="see">Read More...</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularPost;
