import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { Blog } from "../constants/BlogData";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [Blog, setBlog] = useState([]);
  const [rBlog, setrBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://dhruvpythondev.pythonanywhere.com/blog/all_blogs/")
      .then((res) => {
        setBlog(res.data.blogs);
        setrBlog(res.data.blogs[res.data.blogs.length - 1]);
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
