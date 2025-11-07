import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";

const ListingAuthors = () => {
  let { setActiveAuthorId, activeAuthorId, authorsList, setAuthorsList } =
    useContext(BlogsContext);

  function SelectAuthor(id) {
    setActiveAuthorId(id);
  }

  return (
    <div className="px-4 mx-3 ">
      <h1 className="text-center font-semibold text-xl m-3">Edit Authors</h1>
      {authorsList !== null &&
        authorsList.map((el) => {
          return (
            <ul>
              <li className="">
                <NavLink to={"/OperationAuthors"}>
                  <button
                    className={`hover:text-orange-600 transition-all duration-200 ${
                      el._id === activeAuthorId
                        ? " text-white font-semibold"
                        : " "
                    }`}
                    onClick={() => SelectAuthor(el._id)}
                  >
                    {el.name}
                  </button>
                </NavLink>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default ListingAuthors;
