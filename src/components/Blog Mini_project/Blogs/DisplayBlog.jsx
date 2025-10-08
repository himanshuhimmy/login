import { ReactComponent as ViewsIcon } from "../svg/eyes-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as LikeIcon } from "../svg/like-svgrepo-com.svg";

const DisplayBlog = ({ userSearch, loginStstus, setActiveId }) => {
  function handleSelectedId(id) {
    setActiveId(id);
  }

  return (
    <div className=" mt-2 ml-2 bg-slate-200 rounded-l-lg">
      <h1 className="text-2xl font-semibold p-2"> Searched Blogs </h1>
      {userSearch !== false &&
        userSearch.map((blogs) => {
          return (
            <button
              onClick={() => handleSelectedId(blogs._id)}
              key={blogs._id}
              className="p-2 w-full m-auto"
            >
              <div className=" p-2 rounded-lg w-[80%] m-auto bg-slate-400  hover:bg-slate-500 transition-all duration-300">
                <h1 className="text-xl text-center font-semibold">
                  {blogs.title}
                </h1>
                <div className="flex justify-evenly">
                  <p className="font-light ">
                    Author -
                    <samp className="font-normal"> {blogs.author} </samp>
                  </p>
                  <p className="font-light ">
                    Genre -<samp className="font-normal"> {blogs.genre} </samp>
                  </p>
                </div>
                <div className="w-[75%] m-auto flex justify-around">
                  <div className="flex">
                    <LikeIcon width={20} height={20} />
                    <p className="">- {blogs.likes}</p>
                  </div>
                  <div className="flex">
                    <CommentIcon width={20} height={20} />
                    <p>- {blogs.commentsCount}</p>
                  </div>
                  <div className="flex">
                    <ViewsIcon width={20} height={20} />
                    <p>- {blogs.views}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default DisplayBlog;
