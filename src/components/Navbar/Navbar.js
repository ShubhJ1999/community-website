import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-main active">
        <Link className="navbar-brand" to="/">
          Blog-Site
        </Link>
        <form id="search-b">
          <input type="search" className="fas fa-search search-bar" />
        </form>
        <button
          className="navbar-toggler toggle-area"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleContent"
          aria-controls="navbarToggleContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars toggle-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggleContent">
          <ul className="navbar-nav ml-36 nav-link-collection">
            <li className="nav-item">
              <Link to="/all-blogs" className="nav-link">
                All Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Our Story
              </Link>
            </li>
            <button className="btn btn-success ml-5 write-blog">
              Write Blog
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
