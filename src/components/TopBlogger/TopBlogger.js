import React from "react";
import "./TopBlogger.css";

const TopBlogger = () => {
  return (
    <div className="top-blogger">
      <img
        src="http://i.pravatar.cc/300"
        alt="top-blogger-cover"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h4>"Top Blogger of the Week"</h4>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  );
};

export default TopBlogger;
