import { Link, NavLink, Outlet } from "react-router-dom";

const RenderBlogs = () => {
  return (
    <div>
      Blogs
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RenderBlogs;
