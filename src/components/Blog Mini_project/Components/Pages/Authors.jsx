import React, { useContext } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";

const Authors = () => {
  let { recivedBlogs } = useContext(BlogsContext);

  return (
    <div>
      <h1 className="text-center"> Edit Authors </h1>
      <NavLink to={"addAuthor"}>
        <button className="bg-slate-300 px-3 py-2 rounded-md m-3">
          + Add Author
        </button>
      </NavLink>

      {/* <ul>
        <li> Himanshu Chauhan</li>
        {recivedBlogs !== `` &&
          recivedBlogs.map((el) => {
            return <li>{el.author?.name}</li>;
          })}
      </ul> */}
    </div>
  );
};

export default Authors;
