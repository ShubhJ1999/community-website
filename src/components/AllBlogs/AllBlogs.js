import React, { useContext } from "react";
import "./AllBlogs.css";
//import { Blog } from "../../constants/BlogData";
import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import { BlogContext } from "../../Context/BlogContext";

function AllBlogs() {
  const { blogs } = useContext(BlogContext);

  return (
    <>
      <Cover />
      <div className="containervk">
        <div className="container-cardvk">
          {blogs.map((a, key) => {
            return (
              <div className="cardvk" key={key}>
                <div className="thumbvk">
                  <Link to={`/specific-blog/${a.id}`}>
                  <img
                    src={`https://dhruvpythondev.pythonanywhere.com${a.image_url}`}
                    alt={a.title}
                    />
                  </Link>
                </div>
                <div className="card-bodyvk">
                  <div className="card-detailsvk">
                    <ul className="card-detailsvk-ul">
                      <li>{a.slug}</li>
                    </ul>
                  </div>
                  <div className="card-titlevk">
                    <Link className="tLink" to={`/specific-blog/${a._id}`}>
                      {a.title}
                    </Link>
                  </div>
                  <div className="card-contentvk">
                    <p>{a.content}</p>
                  </div>
                  15 Dec • 5 Min Read
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
