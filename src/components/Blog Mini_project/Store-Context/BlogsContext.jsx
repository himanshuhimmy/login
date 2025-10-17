import { createContext } from "react";

const BlogsContext = createContext({
  recivedBlogs: ``,
  serchedData: ``,
  loginStstus: false,
  activeAuthor: ``,
  setActiveId: () => {},
  activeId: ``,
  serchedData: {
    author: "",
    genre: "",
    title: "",
  },
  setRecivedBlogs: () => {},
  activeAuthor: ``,
  setSearchedData: () => {},
});

export default BlogsContext;
