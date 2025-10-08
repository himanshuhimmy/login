import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as ViewsIcon } from "../svg/eyes-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as LikeIcon } from "../svg/like-svgrepo-com.svg";

const ActiveBlog = ({
  activeId,
  setActiveId,
  login,
  updateBlogs,
  activeAuthor,
}) => {
  let [blogs, setBlogs] = useState(``);
  let [toggleEdit, setTogleEdit] = useState(``);
  let InputClass = "rounded-xl m-4 p-1";

  useEffect(() => {
    if (activeId === ``) {
      return;
    } else {
      let data = async () => {
        let response = await axios.get(`http://localhost:7000/get/${activeId}`);
        setBlogs(response.data);
      };
      data();
    }
  }, [activeId]);

  function handleBack() {
    setActiveId(``);
  }

  function OnEditHandle(id, field, value) {
    updateBlogs((prev) =>
      prev.map((blog) => (blog._id === id ? { ...blog, [field]: value } : blog))
    );
  }

  function handleButtonEdit(id) {
    if (toggleEdit === id) {
      let changed = blogs.find((el) => el._id === id);
      let data = async () => {
        await axios.put(`http://localhost:7000/update/${id}`, changed);
      };
      data();
      setTogleEdit("");
    } else {
      setTogleEdit(id);
    }
  }

  function HandleDelete(id) {
    let deleteBlog = async () => {
      await axios.delete(`http://localhost:7000/delete/${id}`);
      let response = await axios.get("http://localhost:7000/get");
      updateBlogs(response.data);
    };
    deleteBlog();
  }

  return (
    <div>
      {blogs !== `` &&
        blogs.map((el) => {
          let author = el.author.split(` `)[0];
          return (
            <div className="p-2 border-2 w-[60%] bg-blue-100 border-gray-400 rounded-2xl m-auto my-4 ">
              <div className="m-2">
                {toggleEdit === el._id && author === activeAuthor ? (
                  <input
                    className="w-[50%] p-2 rounded-lg"
                    onChange={(e) =>
                      OnEditHandle(el._id, `title`, e.target.value)
                    }
                    InputClass="rounded-xl mx-4 p-1"
                    value={el.title}
                  />
                ) : (
                  <h1 className="font-bold text-xl mb-3">{el.title}</h1>
                )}
                <div>
                  <div className=" flex justify-evenly">
                    <p className="font-semibold">
                      Author -
                      {toggleEdit === el._id && author === activeAuthor ? (
                        <input
                          className={InputClass}
                          value={el.author}
                          onChange={(e) =>
                            OnEditHandle(el._id, `author`, e.target.value)
                          }
                          InputClass="rounded-xl mx-4 p-1"
                        />
                      ) : (
                        <samp className="font-normal"> {el.author}</samp>
                      )}
                    </p>
                    <p className="font-semibold">
                      Ratings -
                      {toggleEdit === el._id && author === activeAuthor ? (
                        <input
                          className={InputClass}
                          value={el.authorRating}
                          onChange={(e) =>
                            OnEditHandle(el._id, `authorRating`, e.target.value)
                          }
                          InputClass="rounded-xl mx-4 p-1"
                        />
                      ) : (
                        <samp className="font-normal">{el.authorRating}</samp>
                      )}
                    </p>
                  </div>
                  <div className="flex justify-evenly">
                    <div className="flex p-3">
                      <ViewsIcon width={20} height={20} />
                      <p>- {el.views}</p>
                    </div>
                    <div>
                      <p className="p-3 font-semibold">
                        Genre -
                        {toggleEdit === el._id && author === activeAuthor ? (
                          <input
                            className={InputClass}
                            value={el.genre}
                            onChange={(e) =>
                              OnEditHandle(el._id, `genre`, e.target.value)
                            }
                            InputClass="rounded-xl mx-4 p-1"
                          />
                        ) : (
                          <samp className="font-normal">{el.genre}</samp>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <samp className="font-semibold ">Data-</samp>
                  {toggleEdit === el._id && author === activeAuthor ? (
                    <textarea
                      className="w-[50%] p-2 rounded-md"
                      value={el.content}
                      onChange={(e) =>
                        OnEditHandle(el._id, `content`, e.target.value)
                      }
                      InputClass="rounded-xl mx-4 p-1"
                    />
                  ) : (
                    <p className="text-center p-3">{el.content}</p>
                  )}
                </p>

                <p>
                  Published on -
                  <samp className="font-semibold">
                    {new Date(el.publishDate).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </samp>
                </p>
              </div>
              <div>
                <p>
                  <samp className="font-semibold">Researched From -</samp>
                  {toggleEdit === el._id && author === activeAuthor ? (
                    <input
                      className={InputClass}
                      value={el.researchedFrom}
                      onChange={(e) =>
                        OnEditHandle(el._id, `researchedFrom`, e.target.value)
                      }
                      InputClass="rounded-xl mx-4 p-1"
                    />
                  ) : (
                    el.researchedFrom
                  )}
                </p>

                <p className="flex m-auto justify-around w-[25%] font-semibold">
                  #
                  {toggleEdit === el._id && author === activeAuthor ? (
                    <input
                      className={InputClass}
                      value={el.researchedFrom}
                      onChange={(e) =>
                        OnEditHandle(el._id, `researchedFrom`, e.target.value)
                      }
                      InputClass="rounded-xl mx-4 p-1"
                    />
                  ) : (
                    el.tags.map((tl) => <p>{tl} ,</p>)
                  )}
                </p>
              </div>
              <div className="flex justify-evenly">
                <div className="flex">
                  <LikeIcon width={20} height={20} />
                  <p className="">- {el.likes}</p>
                </div>
                <div className="flex">
                  <CommentIcon width={20} height={20} />
                  <p>- {el.commentsCount}</p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleButtonEdit(el._id)}
                  disabled={login === false || author !== activeAuthor}
                  className={`rounded-lg px-4 py-2 text-white m-4  ${
                    login === false || author !== activeAuthor
                      ? `bg-green-100`
                      : `bg-green-400  hover:bg-green-600 transition-all duration-300`
                  }`}
                >
                  {toggleEdit === el._id ? `Done` : `Edit`}
                </button>
                <button
                  onClick={() => HandleDelete(el._id)}
                  disabled={login === false || author !== activeAuthor}
                  className={`rounded-lg px-4 py-2 text-white m-4  ${
                    login === false || author !== activeAuthor
                      ? `bg-red-100`
                      : `bg-red-400 hover:bg-red-600 transition-all duration-300 `
                  }`}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ActiveBlog;
