import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";

const ListingAuthors = () => {
  let [authorsList, setAuthorsList] = useState(null);

  let { setActiveAuthorId } = useContext(BlogsContext);

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
    <div>
      {authorsList !== null &&
        authorsList.map((el) => {
          return (
            <ul>
              <li>
                <NavLink to={"OperationAuthors"}>
                  <button onClick={() => SelectAuthor(el._id)}>
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
