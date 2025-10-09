import React, { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";
import axios from "axios";
import AddBlog from "./Blogs/AddBlog";
import Modal from "./Reusable/Modal";
import SearchBlogs from "./Blogs/SearchBlogs";
import Navigation_side from "./Blogs/Navigation_side";
import DisplayBlog from "./Blogs/DisplayBlog";
import ActiveBlog from "./Blogs/ActiveBlog";

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
      console.log("Fetched blogs:", response.data);
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
      setModalStatus(true);
    }
  }

  let username = ``;
  let password = ``;

  function LoginHandle(field, value) {
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
    }
  }

  return (
    <div>
      <header className="p-5 bg-slate-400">
        <div className="flex justify-between">
          <div>
            <h1 className="p-1 text-2xl font-bold ml-5">Blogs For You</h1>
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
      <SearchBlogs search={serchedData} setSearch={setSearchedData} />
      {modalStatus === true && (
        <Modal ststus={modalStatus}>
          <div className="p-5 bg-slate-100 rounded-xl">
            <h1 className="text-center mb-5 font-semibold text-xl">Login</h1>
            <form onSubmit={onSubmitHandle}>
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
            </form>
          </div>
        </Modal>
      )}
      <div className="flex">
        <div className="w-[30%]">
          <Navigation_side setActiveId={setActiveId} blogs={recivedBlogs} />
        </div>
        <div className="w-[70%]">
          {activeId === `` ? (
            <DisplayBlog
              loginStstus={loginStstus}
              userSearch={searchedNameGenre}
              setActiveId={setActiveId}
            />
          ) : (
            <ActiveBlog
              loginDetails={loginDetails}
              activeAuthor={activeAuthor}
              login={loginStstus}
              updateBlogs={setRecivedBlogs}
              setActiveId={setActiveId}
              activeId={activeId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPgae;
