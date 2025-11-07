import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import RichTextEditor from "./RichTextEditor";
import { Link } from "react-router-dom";
import axios from "axios";

const EditLoginBLog = () => {
  let InputClass = "rounded-xl m-4 p-1";

  const {
    activeId,
    activeAuthor,
    setActiveId,
    loginStstus,
    setRecivedBlogs,
    recivedBlogs,
  } = useContext(BlogsContext);

  let [authorsList, setAuthorsList] = useState(null);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/fetchAuthors");
      setAuthorsList(response.data);
    };
    data();
  }, []);

  function handleChange(id, value, field) {
    setRecivedBlogs((prev) =>
      prev.map((el) => (el._id === id ? { ...el, [field]: value } : el))
    );
  }

  function handleButtonEdit(id) {
    let changed = recivedBlogs.find((el) => el._id === id);

    let data = async () => {
      await axios.put(`http://localhost:7000/update/${id}`, changed);
    };
    data();
  }

  let genre = [
    { name: "Motivation" },
    { name: "Fitness" },
    { name: "Self-Improvement" },
    { name: "Discipline" },
    { name: "Mindset" },
    { name: "Psychology" },
    { name: "Philosophy" },
    { name: "Power" },
    { name: "Romance" },
    { name: "Dark Romance" },
    { name: "MMA" },
    { name: "Discipline & Grind" },
    { name: "Alpha Mindset" },
    { name: "Stoicism" },
    { name: "Masculinity" },
  ];

  return (
    <div>
      <div className="p-2 border-2 w-[90%] bg-teal-200 border-gray-400 rounded-2xl m-auto my-4 ">
        {recivedBlogs !== null &&
          recivedBlogs.map((el) => {
            return (
              activeId === el._id && (
                <div className="w-full my-3 p-4">
                  <h1 className="text-center mb-3 font-bold text-2xl">
                    Edit Blog
                  </h1>
                  <div className="flex flex-col items-center">
                    <h1 className="mb-1 font-medium text-xl">Title</h1>
                    <input
                      onChange={(e) =>
                        handleChange(el._id, e.target.value, `title`)
                      }
                      className="w-[80%]  p-2 rounded-xl"
                      value={el.title}
                      type="text"
                    />
                  </div>
                  <div className="my-2 ">
                    <h1 className="mb-1 font-medium text-center text-xl">
                      Content
                    </h1>
                    <RichTextEditor
                      value={el.content}
                      onChange={(e) => handleChange(el._id, e, "content")}
                    />
                  </div>
                  <div className="flex justify-center mx-2">
                    <div>
                      <h1 className=" text-center font-medium ">
                        Researched From
                      </h1>
                      <input
                        onChange={(e) =>
                          handleChange(el._id, e.target.value, "researchedFrom")
                        }
                        className={InputClass}
                        value={el.researchedFrom}
                        type="text"
                      />
                    </div>
                    <div>
                      <h1 className=" text-center font-medium ">Tags</h1>
                      <input
                        onChange={(e) =>
                          handleChange(el._id, e.target.value, `tags`)
                        }
                        className={InputClass}
                        value={el.tags}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className=" text-center font-medium mb-1">Genre</h1>
                    <select
                      value={el.genre}
                      onChange={(e) =>
                        handleChange(el._id, e.target.value, "genre")
                      }
                      className="text-center p-1 rounded-md"
                    >
                      {genre.map((gen) => (
                        <option key={gen.name} value={gen.name}>
                          {gen.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="p-3 flex justify-evenly font-semibold">
                    <button
                      onClick={() => handleButtonEdit(el._id)}
                      className="text-white bg-green-500  px-3 py-2 rounded-lg"
                    >
                      Save
                    </button>
                    <Link to={`/BlogsOprations`}>
                      <button className=" px-3 py-2">Back</button>
                    </Link>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default EditLoginBLog;
