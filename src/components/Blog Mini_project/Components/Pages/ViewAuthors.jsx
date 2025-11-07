import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ViewAuthors = () => {
  let [authorsList, setAuthorsList] = useState(null);

  let { setActiveAuthorId, activeAuthorId } = useContext(BlogsContext);

  function getFirstWords(text, count) {
    return text.split(" ").slice(0, count).join(" ") + "    ...ReadMore";
  }

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/fetchAuthors");
      setAuthorsList(response.data);
    };
    data();
  }, []);

  function SelectAuthor(id) {
    setActiveAuthorId(id);
  }

  return (
    <div className="p-5">
      <div>
        {authorsList === null ? (
          <h1>Data Not Fetched</h1>
        ) : (
          authorsList.map((author) => {
            return (
              <NavLink to={"/OperationAuthors"}>
                <div
                  className="p-3 m-2 bg-teal-100 rounded-xl"
                  key={author._id}
                >
                  <button onClick={() => SelectAuthor(author._id)}>
                    <div className="w-full flex p-4">
                      <div className="w-[70%]">
                        <h1 className="text-center font-bold">{author.name}</h1>
                        <p>{getFirstWords(author.description, 20)}</p>
                      </div>
                      <div className="w-[30%]">
                        <img
                          className="rounded-md h-34"
                          src={author.image}
                          alt="Profile Photo"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ViewAuthors;
