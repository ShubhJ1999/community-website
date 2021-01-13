import React, { useContext } from "react";
import "./RecentPost.css";
import { Link } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";

const RecentPost = () => {
  const { letBlog } = useContext(BlogContext);
  return (
    <div className="recent-post">
      <Link to={`/specific-blog/${letBlog.id}`}>
        <img
          src={`https://dhruvpythondev.pythonanywhere.com${letBlog.image_url}`}
          alt={letBlog.title}
          className="recent-cover"
        />
      </Link>
      <div className="recent-post-detail">
        <p>{letBlog.slug}</p>
        <Link to={`/specific-blog/${letBlog.id}`} className="specific-link">
          <h1>{letBlog.title}</h1>
        </Link>
        <p className="recent-post-content">{letBlog.content}</p>
      </div>
    </div>
  );
};

export default RecentPost;
