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
  activeAuthorId: ``,
  setActiveAuthorId: () => {},
  start: ``,
  end: ``,
  handleNext: () => {},
  handlePrev: () => {},
  currentpage: ``,
  handlePageChange: () => {},
  handlePageChange: () => {},
  onSubmitHandle: () => {},
  LoginHandle: () => {},
  loginError: ``,
  toggleLoginButton: () => {},
  activeAuthor: ``,
  setActiveAuthor: () => {},
  authorsList: ``,
  setAuthorsList: () => {},
});

export default BlogsContext;
