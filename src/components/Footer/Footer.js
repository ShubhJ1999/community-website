import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-area">
        <p>Copyright@2020ParthMaru</p>
      </div>
      <div className="middle-area">
        <p>Blog-Site</p>
      </div>
      <div className="right-area">
        <a href="https://www.facebook.com/sharer/sharer.php?u=#">
          <i className="fab fa-facebook-f social-icon"></i>
        </a>
        <a href="https://www.instagram.com/accounts/login=#">
          <i className="fab fa-instagram social-icon"></i>
        </a>
        <a href="https://twitter.com/intent/tweet?url=#">
          <i className="fab fa-twitter social-icon"></i>
        </a>
        <a href="https://wa.me/?text=">
          <i className="fab fa-whatsapp social-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
