import React, { useContext } from "react";
import "./RecentPost.css";
import { Link } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";

const RecentPost = () => {
  const { letBlog } = useContext(BlogContext);

  return (
    <div className="recent-post">
      <Link to={`/specific-blog/${letBlog._id}`}>
        <img
          src="https://images.unsplash.com/photo-1609474710192-19d19829b72f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="recent-img"
          className="recent-cover"
        />
      </Link>
      <div className="recent-post-detail">
        <p>{letBlog.blogCategory}</p>
        <Link to={`/specific-blog/${letBlog._id}`} className="specific-link">
          <h1>{letBlog.blogTitle}</h1>
        </Link>
        <p className="recent-post-content">{letBlog.blogContent}</p>
      </div>
    </div>
  );
};

export default RecentPost;
