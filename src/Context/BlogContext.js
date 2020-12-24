import React, { createContext } from "react";
import { Posts } from "../constants/Posts";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={{ blogs: Posts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
