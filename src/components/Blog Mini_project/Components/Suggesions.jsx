import { useContext, useEffect, useMemo } from "react";
import BlogsContext from "../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";
import Authors from "./Pages/Authors";
import ListingAuthors from "./Pages/ListingAuthors";
// import OperationAuthors from "./Pages./OperationAuthors ";

const Suggesions = () => {
  const { activeId, recivedBlogs, setSearchedData } = useContext(BlogsContext);

  if (
    recivedBlogs === "" ||
    recivedBlogs === null ||
    recivedBlogs === undefined
  )
    return null;

  let displayAuthor = useMemo(() => {
    const filteredAuthor = recivedBlogs.filter((el) => el._id === activeId);

    return filteredAuthor.map((el) => el.author?.name);
  }, [activeId]);

  useEffect(() => {
    if (displayAuthor) {
      setSearchedData((prev) => ({
        ...prev,
        author: displayAuthor,
      }));
    }
  }, [displayAuthor]);

  if (activeId === "") {
    displayAuthor = ``;
  }

  return (
    <div className="p-4">
      <div className="text-center">
        <h1>Suggstions</h1>
        {activeId !== `` && (
          <NavLink to={"searchedBlogs"}>
            <label className="font-semibold">View More From </label>
            <button className="px-3 py-2 mt-5 bg-gray-300 rounded-xl hover:bg-slate-400 transition-all duration-500">
              {displayAuthor}
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Suggesions;
