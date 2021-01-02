import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [tap, setTap] = useState(false);

  return (
    <nav className="nav-container">
      <Link to="/" className="nav-brand">
        <h2 className="brand-logo">Blog Site</h2>
      </Link>
      <div className="search-area">
        <input type="text" placeholder="Search.." className="search-b" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="menu-icon" onClick={() => setTap(!tap)}>
        <i className={tap ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={tap ? "nav-list active" : "nav-list"}>
        <li className="nav-list-item">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search.."
              className="search-b-mobile"
            />
            <button type="submit" className="search-btn-mobile">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </li>

        <li className="nav-list-item">
          <Link
            className="nav-link"
            to="/all-blogs"
            onClick={() => setTap(!tap)}
          >
            All Blogs
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            to="/all-blogs"
            onClick={() => setTap(!tap)}
          >
            Our Story
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            to="/all-blogs"
            onClick={() => setTap(!tap)}
          >
            <button className="btn btn-success write-blog">Write Blog</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
