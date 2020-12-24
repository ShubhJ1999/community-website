import React, { useContext } from "react";
import "./RecentPost.css";
import { Link } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";

const RecentPost = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="recent-main-container">
      <h1 className="title">Recent Posts</h1>
      <hr className="recent-line" />
      {blogs.slice(0, 6).map((item, index) => {
        return (
          <div className="recent-post-container" key={index}>
            <div className="recent-post-imgArea">
              <img
                src={item.urlToImage}
                alt="img"
                className="recent-post-img"
              />
            </div>
            <div className="recent-post-details">
              <h3>{item.title}</h3>
              <div className="article-detail">
                <p className="article-catagory">Technology</p>
                <p>
                  <li>Parth Maru</li>
                </p>
                <p>
                  <li>1 Jan 2020</li>
                </p>
              </div>
              <p className="recent-descripton">{item.description}</p>
              <Link to={`/specific-blog/${item.id}`} className="read-more">
                Read More...
              </Link>
              <i className="fas fa-share share-icon"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
