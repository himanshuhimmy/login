import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../Reusable/Modal";
import { ReactComponent as LikeIcon } from "../../svg/like-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as ViewsIcon } from "../../svg/eyes-svgrepo-com.svg";
import BlogsContext from "../../Store-Context/BlogsContext";
import { Link } from "react-router-dom";
import RichTextEditor from "./RichTextEditor";

const ActiveBlog = () => {
  let [active, setActive] = useState(``);
  let [modaltoggle, setModalToggle] = useState(false);
  let [toggleEdit, setTogleEdit] = useState(``);
  let InputClass = "rounded-xl m-4 p-1";

  let { activeId } = useContext(BlogsContext);
  let { activeAuthor } = useContext(BlogsContext);
  let { setActiveId } = useContext(BlogsContext);
  let { loginStstus } = useContext(BlogsContext);
  let { setRecivedBlogs } = useContext(BlogsContext);
  let { recivedBlogs } = useContext(BlogsContext);

  function handleBack() {
    setActiveId(``);
  }

  function OnEditHandle(id, field, value) {
    setRecivedBlogs((prev) =>
      prev.map((blog) => (blog._id === id ? { ...blog, [field]: value } : blog))
    );
    setActive((prev) =>
      prev.map((blog) => (blog._id === id ? { ...blog, [field]: value } : blog))
    );
  }

  function handleModal() {
    setModalToggle(!modaltoggle);
  }

  function handleButtonEdit(id) {
    if (toggleEdit === id) {
      console.log(recivedBlogs.find((el) => el._id === id));

      let changed = recivedBlogs.find((el) => el._id === id);
      let data = async () => {
        await axios.put(`http://localhost:7000/update/${id}`, changed);
      };
      data();
      setTogleEdit("");
    } else {
      setTogleEdit(id);
    }
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

  useEffect(() => {
    if (activeId === ``) {
      return;
    } else {
      let data = async () => {
        let Response = await axios.get(`http://localhost:7000/get/${activeId}`);
        setActive(Response.data);
      };
      data();
    }
  }, [activeId]);

  return (
    <div>
      {active !== `` &&
        active.map((el) => {
          let author = el.author.split(` `)[0];
          return (
            <div className="p-2 border-2 w-[90%] bg-blue-100 border-gray-400 rounded-2xl m-auto my-4 ">
              {modaltoggle === true && (
                <Modal ststus={modaltoggle}>
                  <div className="p-4">
                    <h1 className="font-semibold text-xl mb-4">
                      Delete This Blog ?{" "}
                    </h1>
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
                  <h1 className="font-bold text-xl mb-3 text-center">
                    {el.title}
                  </h1>
                )}
                <div>
                  <div className="mb-3">
                    <img
                      className=" w-[70%] m-auto rounded-md"
                      src={el.image}
                      alt=""
                    />
                  </div>
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
                <div className="text-center p-3">
                  <samp className="font-semibold ">Content </samp>
                  {toggleEdit === el._id && author === activeAuthor ? (
                    <RichTextEditor
                      value={el.content}
                      onChange={(e) => OnEditHandle(el._id, "content", e)}
                    />
                  ) : (
                    <p className="text-center p-3">{el.content}</p>
                  )}
                </div>

                <p className=" text-center">
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
                <p className="mb-2 text-center">
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

                <p className="flex m-auto justify-around w-[50%] font-semibold mb-2">
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

              <div className=" flex justify-evenly w-[60%] m-auto">
                <button
                  type="button"
                  onClick={() => handleButtonEdit(el._id)}
                  disabled={loginStstus === false || author !== activeAuthor}
                  className={`rounded-lg px-4 py-2 text-white m-4  ${
                    loginStstus === false || author !== activeAuthor
                      ? `bg-green-100`
                      : `bg-green-400  hover:bg-green-600 transition-all duration-300`
                  }`}
                >
                  {toggleEdit === el._id ? `Done` : `Edit`}
                </button>
                <button
                  onClick={() => handleModal()}
                  // onClick={() => HandleDelete(el._id)}
                  disabled={loginStstus === false || author !== activeAuthor}
                  className={`rounded-lg px-4 py-2 text-white m-4  ${
                    loginStstus === false || author !== activeAuthor
                      ? `bg-red-100`
                      : `bg-red-400 hover:bg-red-600 transition-all duration-300 `
                  }`}
                >
                  Delete
                </button>
              </div>
              <div className="p-3 flex justify-center font-semibold">
                <Link to={`/`}>
                  <button className="" onClick={handleBack}>
                    Back
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ActiveBlog;
