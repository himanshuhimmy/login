import React, { useContext } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";

const LoginLanding = () => {
  let { onSubmitHandle, LoginHandle, loginError, toggleLoginButton } =
    useContext(BlogsContext);

  let InputClass = "rounded-xl m-4 p-1";
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/385739.jpg")',
      }}
    >
      <div className="p-6 bg-slate-100 rounded-xl">
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
          <div className="flex justify-center">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginLanding;
