import { useContext } from "react";
import BlogsContext from "../Store-Context/BlogsContext";
import ListingAuthors from "./Pages/ListingAuthors";
import AddAuthor from "./Pages/AddAuthor";
import Authors from "./Pages/Authors";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ handleOnchange }) => {
  const authors = [
    { id: 1, name: "Himanshu Chauhan" },
    { id: 2, name: "Pratik Vora" },
    { id: 3, name: "Deepraj Gupta" },
    { id: 4, name: "Roman Reigns" },
    { id: 5, name: "Guts Berserk" },
  ];

  const genres = [
    { id: 1, name: "Motivation" },
    { id: 2, name: "Self-Improvement" },
    { id: 3, name: "Mindset" },
    { id: 4, name: "Fitness" },
    { id: 5, name: "Philosophy" },
    { id: 6, name: "Leadership" },
    { id: 7, name: "Technology" },
    { id: 8, name: "Artificial Intelligence" },
    { id: 9, name: "Discipline" },
  ];

  let { loginStstus } = useContext(BlogsContext);

  return (
    <div className="w-full ">
      {loginStstus === true ? (
        <div>
          <ListingAuthors />
          <Authors />
          <div className="m-4">
            <h1 className="text-xl font-semibold text-center mb-3">
              Add A New Blog
            </h1>
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
        </div>
      ) : (
        <>
          <div className="p-3 my-3">
            <h1 className="text-xl font-semibold mb-3">Authors</h1>
            <select
              onChange={(e) => handleOnchange(e.target.value, "author")}
              className="p-2 rounded-lg bg-slate-200 text-gray-600 w-full"
            >
              <option value="">Select an Author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.name}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          <div className="p-4">
            <h1 className="text-xl font-semibold mb-3">Genre</h1>
            <select
              onChange={(e) => handleOnchange(e.target.value, "genre")}
              className="p-2 rounded-lg bg-slate-200 text-gray-600 w-full"
            >
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
