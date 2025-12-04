import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Components/Sidebar";
import Suggesions from "./Components/Suggesions";
import BlogsContext from "./Store-Context/BlogsContext";

import PaginationComp from "./Components/Pages/PaginationComp";
import LoginLanding from "./Components/Pages/LoginLanding";

const LoginPgae = () => {
  let loginDetails = [
    { id: 1, username: `Himanshu`, password: `chauhan` },
    { id: 2, username: `Pratik`, password: `vora` },
    { id: 3, username: `Deepraj`, password: `gupta` },
    { id: 4, username: `Guts`, password: `beserk` },
  ];

  let [authorsList, setAuthorsList] = useState(null);
  let [activeAuthor, setActiveAuthor] = useState(``);
  let [authorRole, setAuthorRole] = useState(null);

  let [loginStstus, SetLoginStatus] = useState(() => {
    const stored = localStorage.getItem("loginStstus");
    return stored ? JSON.parse(stored) : false;
  });
  useEffect(() => {
    localStorage.setItem("loginStstus", JSON.stringify(loginStstus));
  }, [loginStstus]);

  let [activeId, setActiveId] = useState(() => {
    return localStorage.getItem("activeId") || "";
  });
  useEffect(() => {
    localStorage.setItem("activeId", activeId);
  }, [activeId]);
  let [toggleLandingLogin, SetToggleLandingLogin] = useState(false);

  // For Authors collection
  let [activeAuthorId, setActiveAuthorId] = useState(null);
  let [loginError, setLoginError] = useState("");
  let [recivedBlogs, setRecivedBlogs] = useState(null);
  let [modalStatus, setModalStatus] = useState(false);
  let [serchedData, setSearchedData] = useState({
    author: ``,
    genre: ``,
    title: ``,
  });

  let [currentpage, setCurrentPage] = useState(0);

  const TotalPageSize = 5;
  const TotalProducts = recivedBlogs ? recivedBlogs.length : 0;
  const NoOfPages = Math.ceil(TotalProducts / TotalPageSize);
  const start = currentpage * TotalPageSize;
  const end = start + TotalPageSize;

  function handlePageChange(n) {
    setCurrentPage(n);
  }

  function handleNext() {
    if (currentpage === 6) {
      setCurrentPage(0);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }
  function handlePrev() {
    if (currentpage === 0) {
      setCurrentPage(6);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }

  let [titleInput, setTitleInput] = useState("");

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/get");
      console.log("Fetched blogs:", response.data);
      setRecivedBlogs(response.data);
    };
    data();
  }, []);

  let [loggedInUsername, setLoggedInUsername] = useState(() => {
    return localStorage.getItem("loggedInUsername") || "";
  });

  useEffect(() => {
    let data = async () => {
      let response = await axios.get(`http://localhost:7000/getAuthorRoles`);
      setAuthorRole(response.data);
    };
    data();
  }, []);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/fetchAuthors");
      setAuthorsList(response.data);
    };
    data();
  }, []);

  useEffect(() => {
    if (
      loginStstus &&
      authorsList &&
      authorsList.length > 0 &&
      loggedInUsername &&
      (!activeAuthor || activeAuthor === "")
    ) {
      const authorIdActive =
        authorsList
          .filter((el) => el.name.split(" ")[0] === loggedInUsername)
          .map((el) => el._id) || [];

      if (authorIdActive.length > 0) {
        const authorIdString = String(authorIdActive[0]);
        setActiveAuthor(authorIdString);
        console.log("Set activeAuthor from useEffect:", {
          loggedInUsername,
          authorId: authorIdString,
          authorIdType: typeof authorIdString,
        });
      }
    }
  }, [loginStstus, authorsList, loggedInUsername, activeAuthor]);

  function toggleLoginButton() {
    if (!loginStstus) {
      SetToggleLandingLogin(!toggleLandingLogin);
    }
    if (loginStstus) {
      SetLoginStatus(false);
      setActiveAuthor("");
      setLoggedInUsername("");
      localStorage.removeItem("loggedInUsername");
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

    const CompareId = loginDetails.find(
      (el) => el.username === username && el.password === password
    );

    if (CompareId) {
      setLoggedInUsername(username);
      localStorage.setItem("loggedInUsername", username);

      if (authorsList && authorsList.length > 0) {
        const authorIdActive =
          authorsList
            .filter((el) => el.name.split(" ")[0] === username)
            .map((el) => el._id) || [];

        if (authorIdActive.length > 0) {
          // Ensure we store as string to avoid type comparison issues
          const authorIdString = String(authorIdActive[0]);
          setActiveAuthor(authorIdString);
          console.log("Set activeAuthor on login:", {
            username,
            authorId: authorIdString,
            authorIdType: typeof authorIdString,
            rawId: authorIdActive[0],
          });
        } else {
          setActiveAuthor("");
          console.warn(`Author not found for username: ${username}`);
        }
      } else {
        setActiveAuthor("");
      }
      SetLoginStatus(true);
      SetToggleLandingLogin(false);
      setModalStatus(false);
    } else {
      setLoginError("Invalid username or password!");
    }
  }

  const navigate = useNavigate();

  function handleOnchange(e, field) {
    if (field === "author" || field === "genre") {
      navigate(`/searchedBlogs`);
      setSearchedData((prev) => ({ ...prev, [field]: e }));
    }
  }

  function handleTitleKeyDown(ev) {
    if (ev.key === "Enter") {
      const value = titleInput.trim();
      if (value) {
        navigate(`/searchedBlogs`);
        setSearchedData((prev) => ({ ...prev, title: value }));
      } else {
        setSearchedData((prev) => ({ ...prev, title: "" }));
      }
    }
  }

  let ctxValue = {
    recivedBlogs,
    loginStstus,
    SetLoginStatus,
    activeAuthor,
    setActiveId,
    activeId,
    serchedData,
    setRecivedBlogs,
    setSearchedData,
    setActiveAuthorId,
    activeAuthorId,
    start,
    end,
    handleNext,
    handlePrev,
    currentpage,
    handlePageChange,
    onSubmitHandle,
    LoginHandle,
    loginError,
    toggleLoginButton,
    activeAuthor,
    setActiveAuthor,
    authorsList,
    setAuthorsList,
    authorRole,
  };

  return (
    <div>
      <header className="p-5 bg-slate-400">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="p-1 text-2xl font-bold ml-6">Blogs For You</h1>
            {!toggleLandingLogin && (
              <input
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                onKeyDown={handleTitleKeyDown}
                className="ml-3 p-2 rounded-2xl"
                placeholder="Search Title"
                type="text"
              />
            )}
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

      <BlogsContext.Provider value={ctxValue}>
        {toggleLandingLogin === true ? (
          <LoginLanding />
        ) : (
          <div className="flex mt-2">
            <div className="w-[20%] h-svh bg-slate-300 rounded-r-lg">
              <Sidebar handleOnchange={handleOnchange} />
            </div>
            <div className="w-[65%]">
              <h1 className="font-bold text-2xl text-center mb-4">Blogs</h1>
              <PaginationComp />
              <Outlet />
            </div>
            <div className="w-[15%] h-svh bg-slate-100 rounded-l-lg">
              <Suggesions />
            </div>
          </div>
        )}
      </BlogsContext.Provider>
    </div>
  );
};

export default LoginPgae;
