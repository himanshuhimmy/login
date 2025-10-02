import React, { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";
import axios from "axios";
import AddBlog from "./Blogs/AddBlog";
import Modal from "./Reusable/Modal";

const LoginPgae = () => {
  let loginDetails = { username: `himanshu`, password: `chauhan` };
  let InputClass = "rounded-xl m-4 p-1";

  let [loginStstus, SetLoginStatus] = useState(true);
  let [recivedBlogs, setRecivedBlogs] = useState(null);
  let [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/get");
      setRecivedBlogs(response.data);
    };
    data();
  }, []);

  function toggleLoginButton() {
    if (loginStstus) {
      SetLoginStatus(false);
    } else {
      setModalStatus(true);
    }
  }

  console.log(loginStstus, modalStatus);
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
    if (
      username === loginDetails.username &&
      password === loginDetails.password
    ) {
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
      <AddBlog login={loginStstus} />
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
      <div>
        <Blogs
          blogs={recivedBlogs}
          login={loginStstus}
          updateBlogs={setRecivedBlogs}
        />
      </div>
    </div>
  );
};

export default LoginPgae;
