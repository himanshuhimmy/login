import React from "react";

const HeadBar = ({ login }) => {
  function handleClick() {
    login(false);
  }

  return (
    <header className="p-3 flex items-center justify-end mx-4">
      <h1 className="text-cyan-900 font-bold text-2xl p-4 ">
        Budget Calculator
      </h1>

      <button
        onClick={handleClick}
        className=" bg-red-400 hover:bg-red-700 p-4 rounded-2xl m-2 flex justify-end transition-colors duration-500"
      >
        Logout
      </button>
    </header>
  );
};

export default HeadBar;
