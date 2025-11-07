import { useState } from "react";
import { NavLink } from "react-router-dom";

const BlogsSidebarComp = () => {
  let [toggle, setToggle] = useState(false);

  function toggleHandle() {
    setToggle(!toggle);
  }
  return (
    <div className="text-center mt-4 ">
      <button onClick={toggleHandle} className="text-2xl font-semibold mb-2">
        Blogs
      </button>

      {toggle && (
        <div className="flex flex-col ">
          <hr />
          <NavLink to={"BlogsOprations"}>
            <button className="p-1 m-2 font-medium">View Blogs </button>
          </NavLink>
          <hr />
          <div className="m-4">
            <NavLink
              to="/addBlog"
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-500 px-4 py-2 rounded-md"
                  : "bg-slate-400 px-3 py-2 rounded-lg"
              }
            >
              + Add A Blog
            </NavLink>
          </div>
          <hr />
          <div className="my-2">{/* <Authors /> */}</div>
        </div>
      )}
    </div>
  );
};

export default BlogsSidebarComp;
