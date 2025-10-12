import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import axios from "axios";
import AddBlog from "./Blogs/AddBlog";
import Modal from "./Reusable/Modal";
import SearchBlogs from "./Blogs/SearchBlogs";
import Navigation_side from "./Blogs/Navigation_side";
import DisplayBlog from "./Blogs/DisplayBlog";
import ActiveBlog from "./Components/Pages/ActiveBlog";
import Sidebar from "./Components/Sidebar";
import RenderBlogs from "./Components/RenderBlogs";
import Suggesions from "./Components/Suggesions";
import DisplayAllBlogs from "./Components/Pages/DisplayAllBlogs";
import SideSeachedBlogs from "./Components/Pages/SideSeachedBlogs";
import BlogsContext from "./Store-Context/BlogsContext";

const LoginPgae = () => {
  let loginDetails = [
    { id: 1, username: `Himanshu`, password: `chauhan` },
    { id: 2, username: `Pratik`, password: `vora` },
    { id: 3, username: `Deepraj`, password: `gupta` },
    { id: 4, username: `Guts`, password: `beserk` },
  ];
  let InputClass = "rounded-xl m-4 p-1";

  let [activeAuthor, setActiveAuthor] = useState(``);
  let [loginStstus, SetLoginStatus] = useState(true);
  let [activeId, setActiveId] = useState(``);

  let [loginError, setLoginError] = useState("");
  let [recivedBlogs, setRecivedBlogs] = useState(null);
  let [modalStatus, setModalStatus] = useState(false);
  let [serchedData, setSearchedData] = useState({
    author: ``,
    genre: ``,
    title: ``,
  });

  let [searchedNameGenre, setSearchedNameGenre] = useState(false);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/get");
      // console.log("Fetched blogs:", response.data);
      setRecivedBlogs(response.data);
    };
    data();
  }, []);

  useEffect(() => {
    if (!recivedBlogs) return;

    let filtered = recivedBlogs.filter((blog) => {
      let Title = blog.title
        .toLowerCase()
        .split(` `)
        .includes(serchedData.title);
      let Author = blog.author === serchedData.author;
      let Genre = blog.genre === serchedData.genre;

      return Author || Genre || Title;
    });

    setSearchedNameGenre(filtered);
  }, [serchedData, recivedBlogs]);

  function toggleLoginButton() {
    if (loginStstus) {
      SetLoginStatus(false);
    } else {
      setModalStatus(!modalStatus);
    }
  }

  let username = ``;
  let password = ``;

  function LoginHandle(field, value) {
    if (loginError) setLoginError("");

    if (field === `username`) {
      username = value;
    } else {
      password = value;
    }
  }

  function onSubmitHandle(e) {
    e.preventDefault();
    let CompareId = loginDetails.find(
      (el) => el.username === username && el.password === password
    );

    if (CompareId) {
      setActiveAuthor(username);
      SetLoginStatus(true);
      setModalStatus(false);
    } else {
      setLoginError("Invalid username or password!");
    }
  }
  const navigate = useNavigate();

  function handleOnchange(e, field) {
    navigate(`/searchedBlogs`);
    setSearchedData((prev) => ({ ...prev, [field]: e }));
  }

  let ctxValue = {
    recivedBlogs,
    loginStstus,
    activeAuthor,
    setActiveId,
    activeId,
    serchedData,
  };

  return (
    <div>
      <header className="p-5 bg-slate-400">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="p-1 text-2xl font-bold ml-6">Blogs For You</h1>
            <input
              onChange={(e) => handleOnchange(e.target.value, `title`)}
              className="ml-3 p-2 rounded-2xl"
              placeholder="Search Title"
              type="text"
            />
          </div>
          <div className="mr-4">
            <button
              onClick={toggleLoginButton}
              className="px-3 py-2 bg-green-300 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
            >
              {loginStstus === true ? `logout` : `login`}
            </button>
          </div>
        </div>
      </header>
      {loginStstus === true && (
        <AddBlog author={activeAuthor} login={loginStstus} />
      )}
      {/* <SearchBlogs search={serchedData} setSearch={setSearchedData} /> */}
      {modalStatus === true && (
        <Modal ststus={modalStatus}>
          <div className="p-5 bg-slate-100 rounded-xl">
            <h1 className="text-center mb-5 font-semibold text-xl">Login</h1>
            <form onSubmit={onSubmitHandle}>
              {loginError && (
                <p className="text-red-500 text-center mb-2">{loginError}</p>
              )}
              <div className="flex flex-col justify-between">
                <input
                  className={InputClass}
                  onChange={(e) => LoginHandle("username", e.target.value)}
                  required
                  minLength={4}
                  placeholder="User Name"
                  type="text"
                />
                <input
                  className={InputClass}
                  onChange={(e) => LoginHandle("password", e.target.value)}
                  required
                  minLength={4}
                  placeholder="Password"
                  type="text"
                />
              </div>

              <button className="bg-green-300 text-white px-3 py-2 rounded-lg">
                Login
              </button>
              <button
                type="button"
                onClick={toggleLoginButton}
                className="bg-red-400 text-white px-3 py-2 rounded-lg mx-2"
              >
                back
              </button>
            </form>
          </div>
        </Modal>
      )}
      <div className="flex mt-2">
        <div className="w-[20%] h-svh bg-slate-300 rounded-r-lg">
          <Sidebar handleOnchange={handleOnchange} />
        </div>
        <div className="w-[65%]">
          <BlogsContext.Provider value={ctxValue}>
            <Outlet />
          </BlogsContext.Provider>
          {/* 
          <DisplayAllBlogs setActiveId={setActiveId} Blogs={recivedBlogs} />

          <ActiveBlog
            login={loginStstus}
            activeAuthor={activeAuthor}
            setActiveId={setActiveId}
            activeId={activeId}
          />
          <SideSeachedBlogs
            setActiveId={setActiveId}
            serchedData={serchedData}
          /> */}
        </div>
        <div className="w-[15%] h-svh bg-slate-100 rounded-l-lg">
          <Suggesions Blogs={recivedBlogs} />
        </div>
      </div>
    </div>
  );
};

export default LoginPgae;
