import { createContext } from "react";

const BlogsContext = createContext({
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
});

export default BlogsContext;
