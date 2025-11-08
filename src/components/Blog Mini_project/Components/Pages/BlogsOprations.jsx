import React, { useContext, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { NavLink } from "react-router-dom";
import Modal from "../../Reusable/Modal";
import axios from "axios";

const BlogsOprations = () => {
  let {
    setActiveId,
    activeId,
    recivedBlogs,
    start,
    end,
    setRecivedBlogs,
    setActiveAuthor,
    activeAuthor,
  } = useContext(BlogsContext);

  const getAuthorId = (author) => {
    if (!author) return null;
    if (typeof author === "string") return author;
    if (author._id) return author._id.toString();
    return null;
  };

  function HandleActive(id, authorId) {
    setActiveId(id);
    setActiveAuthor(authorId);
  }
  let [modaltoggle, setModalToggle] = useState(false);
  function handleModal() {
    setModalToggle(!modaltoggle);
  }

  function HandleDelete() {
    let deleteBlog = async () => {
      await axios.delete(`http://localhost:7000/delete/${activeId}`);
      let response = await axios.get("http://localhost:7000/get");
      setRecivedBlogs(response.data);
    };
    deleteBlog();
    setModalToggle(!modaltoggle);
    setActiveId(``);
  }

  return (
    <div>
      {modaltoggle === true && (
        <Modal ststus={modaltoggle}>
          <div className="p-4">
            <h1 className="font-semibold text-xl mb-4">Delete This Blog ? </h1>
            <div className="p-4">
              <button
                className="m-2 px-3 py-2 bg-red-400 rounded-lg hover:bg-red-500 transition-all duration-300"
                onClick={HandleDelete}
              >
                Delete
              </button>
              <button
                className="m-2 px-3 py-2 bg-green-400 rounded-lg hover:bg-green-500 transition-all duration-300"
                onClick={handleModal}
              >
                cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div>
        {recivedBlogs !== undefined &&
          recivedBlogs !== null &&
          recivedBlogs.slice(start, end).map((el) => {
            let date = new Date(el.publishDate);
            let formatted = date.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            const authorId = getAuthorId(el.author);
            const isAuthorMatch = activeAuthor === authorId;

            return (
              <div key={el._id} className="block w-full m-3 text-left">
                <div className="p-3 bg-teal-100 rounded-xl w-full">
                  <div className="flex">
                    <div className="w-[70%] my-3">
                      <h1 className="font-semibold text-center text-2xl mb-4">
                        {el.title}
                      </h1>
                      <div className="flex justify-evenly">
                        <p>
                          <span className="font-semibold">Genre - </span>
                          {el.genre}
                        </p>
                        <p>
                          <span className="font-semibold">Author - </span>
                          {el.author?.name}
                        </p>
                        <p>
                          <span className="font-semibold">Date - </span>
                          {formatted}
                        </p>
                      </div>
                    </div>
                    <div className="w-[30%] flex flex-col">
                      <h1 className="font-medium text-center mb-2 ">Options</h1>
                      <div className="flex  justify-evenly">
                        <NavLink to={`/EditLoginBLog/%${el._id}`}>
                          <button
                            disabled={!isAuthorMatch}
                            onClick={() => HandleActive(el._id, authorId)}
                            className={`px-4 py-2 m-4 rounded-lg text-white transition-all duration-300 ${
                              !isAuthorMatch
                                ? "bg-green-200 cursor-not-allowed"
                                : "bg-green-400 hover:bg-green-600"
                            }`}
                          >
                            Edit
                          </button>
                        </NavLink>
                        <button
                          disabled={!isAuthorMatch}
                          onClick={() => {
                            setActiveId(el._id);
                            handleModal();
                          }}
                          className={`px-4 py-2 m-4 rounded-lg text-white transition-all duration-300 ${
                            !isAuthorMatch
                              ? "bg-red-200 cursor-not-allowed"
                              : "bg-red-400 hover:bg-red-600"
                          }`}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogsOprations;
