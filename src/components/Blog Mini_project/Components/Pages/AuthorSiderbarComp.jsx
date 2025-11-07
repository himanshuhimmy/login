import React, { useState } from "react";
import AddAuthor from "./AddAuthor";
import Authors from "./Authors";
import { NavLink } from "react-router-dom";
import ListingAuthors from "./ListingAuthors";

const AuthorSiderbarComp = () => {
  let [toggle, setToggle] = useState(false);

  function toggleHandle() {
    setToggle(!toggle);
  }

  return (
    <div className="text-center mt-4 ">
      <button onClick={toggleHandle} className="text-2xl font-semibold mb-2">
        Authors
      </button>
      {toggle && (
        <div className="flex flex-col ">
          <hr />
          <NavLink to={"viewAuthors"}>
            <button className="p-1 m-2 font-medium">View authors </button>
          </NavLink>
          <hr />
          <ListingAuthors />
          <hr />
          <div className="my-2">
            <Authors />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorSiderbarComp;
