import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { Blog } from "../constants/BlogData";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [Blog, setBlog] = useState([]);
  const [rBlog, setrBlog] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://communitywebsite.herokuapp.com/blogs"
      )
      .then((res) => {
        setBlog(res.data);
        setrBlog(res.data[res.data.length - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BlogContext.Provider value={{ blogs: Blog, letBlog: rBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
