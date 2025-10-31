import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ReactComponent as LikeIcon } from "../../svg/like-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as ViewsIcon } from "../../svg/eyes-svgrepo-com.svg";
import BlogsContext from "../../Store-Context/BlogsContext";
import { Link } from "react-router-dom";

const SideSeachedBlogs = () => {
  let [data, setData] = useState([]);

  let { serchedData } = useContext(BlogsContext);
  let { setActiveId } = useContext(BlogsContext);

  useEffect(() => {
    // If no criteria provided, show all blogs (useful on reload of /searchedBlogs)
    if (
      (!serchedData.author || serchedData.author === ``) &&
      (!serchedData.genre || serchedData.genre === ``) &&
      (!serchedData.title || serchedData.title === ``)
    ) {
      let fetchAll = async () => {
        let Response = await axios.get(`http://localhost:7000/get`);
        setData(Response.data);
      };
      fetchAll();
      return;
    }

    if (serchedData.author !== ``) {
      console.log(serchedData.author);
      let data = async () => {
        let Response = await axios.get(
          `http://localhost:7000/get/author/${serchedData.author}`
        );
        setData(Response.data);
      };
      data();
    }
    if (serchedData.genre !== ``) {
      let data = async () => {
        let Response = await axios.get(
          `http://localhost:7000/get/genre/${serchedData.genre}`
        );
        setData(Response.data);
      };
      data();
    }

    if (serchedData.title !== ``) {
      let data = async () => {
        let Response = await axios.get(
          `http://localhost:7000/get/title/${serchedData.title}`
        );
        setData(Response.data);
      };
      data();
    }
  }, [serchedData]);

  function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function getFirstWords(text, count) {
    const plain = stripHtml(text || "");
    return plain.split(" ").slice(0, count).join(" ") + "    ...ReadMore";
  }

  function HandleActive(id) {
    setActiveId(id);
  }

  return (
    <div>
      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((el) => {
          return (
            <Link to={`/activeBlog/${el._id}`}>
              <button onClick={() => HandleActive(el._id)}>
                <div className="p-3 bg-teal-100 rounded-xl m-3">
                  <div className="flex">
                    <div className="w-[70%] my-3">
                      <h1 className="font-semibold text-2xl mb-4">
                        {el.title}
                      </h1>
                      <div className="flex justify-evenly">
                        <p>
                          <samp className="font-semibold">Genre - </samp>
                          {el.genre}
                        </p>
                        <p>
                          <samp className="font-semibold">Author - </samp>
                          {el.author?.name}
                        </p>
                      </div>
                      <div className="p-4">
                        <p>
                          <samp className="font-semibold">Content - </samp>
                          {getFirstWords(el.content, 30)}
                        </p>
                      </div>
                      <div className="flex justify-evenly ">
                        <div className="flex">
                          <LikeIcon width={20} height={20} />
                          <p className=""> - {el.likes}</p>
                        </div>
                        <div className="flex">
                          <CommentIcon width={20} height={20} />
                          <p> - {el.commentsCount}</p>
                        </div>
                        <div className="flex">
                          <ViewsIcon width={20} height={20} />
                          <p> - {el.views}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%]">
                      <img
                        className="rounded-lg h-[80%] m-auto my-4"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </button>
            </Link>
          );
        })}
    </div>
  );
};

export default SideSeachedBlogs;
