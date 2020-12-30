import React from "react";
import "./AllBlogs.css";
import { Blog } from "../../constants/BlogData";
import bg from "../../images/all-bg.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AllBlogs({ cat }) {
  var d = Blog.filter((catd) => catd.cat.toLowerCase() === cat).length;

  if (d === 0) {
    return (
      <>
        <Navbar />

        <div className="cover-imgvk">
          <img
            className="cover-imgvk"
            src="https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHN0YXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="cover-img"
          />
        </div>
        <div className="containervk">
          <div className="container-cardvk">
            <div className="cat-menuvk">
              <ul className="nav-pil-manvk">
                <li>
                  <Link className="linkvk" to="/all-blogs/react">
                    React
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/php">
                    PHP
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/java">
                    java
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/python">
                    Python
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/iot">
                    iOt
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/dbms">
                    DBMS
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/c">
                    C
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/cpp">
                    C++
                  </Link>
                </li>
              </ul>
            </div>
            <div className="warnvk">
              <div>Sorry!!Data Not Available</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />

        <div className="cover-imgvk">
          <img className="cover-imgvk" src={bg} alt="cover-img" />
        </div>
        <div className="containervk">
          <div className="container-cardvk">
            <div className="cat-menuvk">
              <ul className="nav-pil-manvk">
                <li>
                  <Link className="linkvk" to="/all-blogs/react">
                    React
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/php">
                    PHP
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/java">
                    java
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/python">
                    Python
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/iot">
                    iOt
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/dbms">
                    DBMS
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/c">
                    C
                  </Link>
                </li>
                <li>
                  <Link className="linkvk" to="/all-blogs/cpp">
                    C++
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
            {Blog.filter((catd) => catd.cat.toLowerCase() === cat).map(
              (a, key) => {
                return (
                  <div key={key} className="cardvk">
                    <div className="thumbvk">
                      <Link to="/">
                        <img
                          src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt="card-thumb-img"
                        />
                      </Link>
                    </div>
                    <div className="card-bodyvk">
                      <div className="card-titlevk">{a.title}</div>
                      <div className="card-detailsvk">
                        <ul className="card-detailsvk-ul">
                          <li>
                            {" "}
                            <i className="fa fa-tag" /> {a.cat}
                          </li>
                          <li>
                            {" "}
                            <i className="fa fa-user-o" /> {a.author}
                          </li>
                          <li>
                            {" "}
                            <i className="fa fa-calendar" /> {a.date}
                          </li>
                        </ul>
                      </div>
                      <div className="card-contentvk">
                        <p>{a.content}</p>
                      </div>
                      <Link to="/">Read More</Link>
                      <div className="card-engvk">
                        <ul className="card-engvk-ul">
                          <li>
                            {" "}
                            <i
                              className="fa fa-heart"
                              aria-hidden="true"
                            />{" "}
                            {a.like}
                          </li>
                          <li>
                            {" "}
                            <i
                              className="fa fa-commenting-o"
                              aria-hidden="true"
                            />{" "}
                            {a.comments}
                          </li>
                          <li>
                            {" "}
                            <i
                              className="fa fa-share"
                              aria-hidden="true"
                            />{" "}
                            {a.share}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </>
    );
  }
}

export default AllBlogs;
