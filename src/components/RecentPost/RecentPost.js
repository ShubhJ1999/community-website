import React, { useContext } from "react";
import "./RecentPost.css";
import { Link } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";

const RecentPost = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="recent-post">
      <img src={blogs[0].thumb} alt="recent-img" className="recent-cover" />
      <div className="recent-post-detail">
        <p>Technology</p>
        <h1>{blogs[0].title}</h1>
        <p className="recent-post-content">{blogs[0].content}</p>
      </div>
    </div>
  );
};

export default RecentPost;
