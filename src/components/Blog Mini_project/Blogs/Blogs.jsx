import axios from "axios";
import { useState } from "react";
const Blogs = ({ blogs, login, updateBlogs }) => {
  let [toggleEdit, setTogleEdit] = useState(``);
  let InputClass = "rounded-xl m-4 p-1";

  function HandleDelete(id) {
    let deleteBlog = async () => {
      await axios.delete(`http://localhost:7000/delete/${id}`);
      let response = await axios.get("http://localhost:7000/get");
      updateBlogs(response.data);
    };
    deleteBlog();
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

  return (
    <div>
      <form action="">
        {blogs === null ? (
          `Fetching Data.....`
        ) : (
          <div>
            {blogs.map((el) => {
              return (
                <div className="p-2 border-2 w-[60%] bg-blue-100 border-gray-400 rounded-2xl m-auto my-4 ">
                  <div className="m-2">
                    {toggleEdit === el._id ? (
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
                          {toggleEdit === el._id ? (
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
                          {toggleEdit === el._id ? (
                            <input
                              className={InputClass}
                              value={el.authorRating}
                              onChange={(e) =>
                                OnEditHandle(
                                  el._id,
                                  `authorRating`,
                                  e.target.value
                                )
                              }
                              InputClass="rounded-xl mx-4 p-1"
                            />
                          ) : (
                            <samp className="font-normal">
                              {el.authorRating}
                            </samp>
                          )}
                        </p>
                      </div>
                      <div className="flex justify-evenly">
                        <p className="p-3 ">{el.views}</p>
                        <p className="p-3 font-semibold">
                          Genre -
                          {toggleEdit === el._id ? (
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
                  <div>
                    <p>
                      <samp className="font-semibold ">Data-</samp>
                      {toggleEdit === el._id ? (
                        <textarea
                          className="w-[50%] p-2 rounded-md"
                          value={el.content}
                          onChange={(e) =>
                            OnEditHandle(el._id, `content`, e.target.value)
                          }
                          InputClass="rounded-xl mx-4 p-1"
                        />
                      ) : (
                        el.content
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
                      {toggleEdit === el._id ? (
                        <input
                          className={InputClass}
                          value={el.researchedFrom}
                          onChange={(e) =>
                            OnEditHandle(
                              el._id,
                              `researchedFrom`,
                              e.target.value
                            )
                          }
                          InputClass="rounded-xl mx-4 p-1"
                        />
                      ) : (
                        el.researchedFrom
                      )}
                    </p>

                    <p className="flex m-auto justify-around w-[25%] font-semibold">
                      #
                      {toggleEdit === el._id ? (
                        <input
                          className={InputClass}
                          value={el.researchedFrom}
                          onChange={(e) =>
                            OnEditHandle(
                              el._id,
                              `researchedFrom`,
                              e.target.value
                            )
                          }
                          InputClass="rounded-xl mx-4 p-1"
                        />
                      ) : (
                        el.tags.map((tl) => <p>{tl} ,</p>)
                      )}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="p-4">{el.likes}</p>
                    <p className="p-4">{el.commentsCount}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleButtonEdit(el._id)}
                      disabled={login === false}
                      className={`rounded-lg px-4 py-2 text-white m-4  ${
                        login === false
                          ? `bg-green-100`
                          : `bg-green-400  hover:bg-green-600 transition-all duration-300`
                      }`}
                    >
                      {toggleEdit === el._id ? `Done` : `Edit`}
                    </button>
                    <button
                      onClick={() => HandleDelete(el._id)}
                      disabled={login === false}
                      className={`rounded-lg px-4 py-2 text-white m-4  ${
                        login === false
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
          </div>
        )}
      </form>
    </div>
  );
};

export default Blogs;
