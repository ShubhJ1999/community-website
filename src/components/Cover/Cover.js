import React from "react";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <div>
      <div className="carousel slide" id="demo" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg1} className="cover-back" alt="carousal-cover-img" />
            <div className="carousel-caption">
              <a className="stretched-link" href="caruosal-cover">
                <span className="p-2">TECHNOLOGY</span>
                <span className="p-2">DESIGN</span>
                <h1>How to Ask Great Questions - Harvard Business ReviewS</h1>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg2} className="cover-back" alt="cover-back" />
            <div className="carousel-caption">
              <a className="stretched-link" href="caruosal-cover">
                <span className="p-2">TECHNOLOGY</span>
                <span className="p-2">DESIGN</span>
                <h1>How to Ask Great Questions - Harvard Business Review</h1>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg3} className="cover-back" alt="cover-back" />
            <div className="carousel-caption">
              <a className="stretched-link" href="caruosal-cover">
                <span className="p-2">TECHNOLOGY</span>
                <span className="p-2">DESIGN</span>
                <h1>How to Ask Great Questions - Harvard Business Review</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
