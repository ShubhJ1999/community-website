import React from "react";
import "./AllBlogs.css";
import { Blog } from "../../constants/BlogData";
import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";

function AllBlogs() {
  return (
    <>
      <Cover />
      <div className="containervk">
        <div className="container-cardvk">
          {Blog.map((a, key) => {
            return (
              <div className="cardvk" key={key}>
                <div className="thumbvk">
                  <Link to="/">
                    <img
                      src="https://images.unsplash.com/photo-1609238642088-26031d126e37?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="card-thumb-img"
                    />
                  </Link>
                </div>
                <div className="card-bodyvk">
                  <div className="card-detailsvk">
                    <ul className="card-detailsvk-ul">
                      <li>{a.cat}</li>
                    </ul>
                  </div>
                  <div className="card-titlevk">{a.title}</div>
                  <div className="card-contentvk">
                    <p>{a.content}</p>
                  </div>
                  15 Dec • 2min Read
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
