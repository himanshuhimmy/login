import { ReactComponent as LikeIcon } from "../../svg/like-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as ViewsIcon } from "../../svg/eyes-svgrepo-com.svg";
import { useContext } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import { Link } from "react-router-dom";
const DisplayAllBlogs = () => {
  let { setActiveId } = useContext(BlogsContext);
  let { recivedBlogs } = useContext(BlogsContext);

  function getFirstWords(text, count) {
    return text.split(" ").slice(0, count).join(" ") + "    ...ReadMore";
  }

  function HandleActive(id) {
    setActiveId(id);
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold p-4 mb-4">Blogs </h1>
        {recivedBlogs !== undefined &&
          recivedBlogs !== null &&
          recivedBlogs.map((el) => {
            return (
              <Link to={`activeBlog`}>
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
                            {el.author}
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
    </div>
  );
};

export default DisplayAllBlogs;
