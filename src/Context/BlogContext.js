import React, { createContext } from "react";
import { Blog } from "../constants/BlogData";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={{ blogs: Blog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
