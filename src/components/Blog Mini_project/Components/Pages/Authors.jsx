import React, { useContext } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";

const Authors = () => {
  let { recivedBlogs } = useContext(BlogsContext);

  return (
    <div className="mt-3">
      <h1 className="text-center font-semibold text-xl mb-4">
        Add A New Author
      </h1>
      <NavLink
        to="addAuthor"
        className={({ isActive }) =>
          isActive
            ? "bg-slate-600 text-white px-3 py-2 rounded-md m-3 "
            : "bg-slate-400 text-black px-3 py-2 rounded-md m-3"
        }
      >
        + Add Author
      </NavLink>
    </div>
  );
};

export default Authors;
