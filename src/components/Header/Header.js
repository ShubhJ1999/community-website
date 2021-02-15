import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [tap, setTap] = useState(false);

  return (
    <div className="header ">
      <div className="header__left">
        <Link to="/" className="header__link">
          <h4>Blog Site</h4>
        </Link>
        <div className="header__searchbar">
          <SearchIcon />
          <input type="text" className="header__inputbox" />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setTap(!tap)}>
        <i className={tap ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={tap ? "header__right active" : "header__right"}>
        {/* Mobile Start */}
        <div className="header__searchbar__mobile">
          <SearchIcon />
          <input type="text" className="header__inputbox" />
        </div>
        {/* Mobile End */}

        <Link to="/all-blogs" className="header__link">
          <h5 className="header__item">All Blogs</h5>
        </Link>
        <Link to="/all-blogs" className="header__link">
          <h5 className="header__item">Our Story</h5>
        </Link>
        <button className="header__writeBlog">
          <h5>Write Blog</h5>
        </button>
      </div>
    </div>
  );
};

export default Header;
