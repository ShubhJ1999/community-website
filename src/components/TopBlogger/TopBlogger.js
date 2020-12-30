import React from "react";
import "./TopBlogger.css";

const TopBlogger = () => {
  return (
    <div className="top-blogger">
      <img
        src="http://i.pravatar.cc/300"
        alt="top-blogger-cover"
        className="w-20 h-20 rounded-full mx-auto top-blogger-cover"
      />
      <h4>Parth Maru</h4>
      <p className="top-blogger-thought">
        "You can't make a fan of everyone. Stay true to your story, characters,
        music, art, or whatever it is you do."
      </p>
    </div>
  );
};

export default TopBlogger;
