import React from "react";
import bg from "../../images/bg.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="c-bg">
      <img src={bg} alt="stars" className="star" />
      <p className="line">Write Engage Learn </p>
    </div>
  );
};

export default Cover;
