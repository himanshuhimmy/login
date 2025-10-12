import React, { useState } from "react";

import { ReactComponent as ViewsIcon } from "../svg/eyes-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../svg/comment-1-svgrepo-com.svg";
import { ReactComponent as LikeIcon } from "../svg/like-svgrepo-com.svg";

const Navigation_side = ({ blogs, setActiveId }) => {
  function handleSelectedId(id) {
    setActiveId(id);
  }
  return (
    <div className="w-full bg-gray-400 rounded-r-lg mt-2">
      <div className="w-[50%] py-3 m-auto">
        <h1 className=" font-semibold text-xl p-1 bg-slate-500 rounded-2xl">
          Title
        </h1>
      </div>
      <div>
        {blogs !== null &&
          blogs.map((el) => {
            return (
              <button onClick={() => handleSelectedId(el._id)} key={el._id}>
                <div className="p-3 m-2 bg-slate-300 hover:bg-gray-300 transition-all duration-300 rounded-2xl">
                  <img
                    src={el.image}
                    className="w-[30%]"
                    alt="Description of image"
                  />

                  <h1 className="font-semibold text-xl">{el.title}</h1>
                  <p>Author -{el.author}</p>
                  <div className="flex justify-around">
                    <div className="flex">
                      <LikeIcon width={20} height={20} />
                      <p className="">- {el.likes}</p>
                    </div>
                    <div className="flex">
                      <CommentIcon width={20} height={20} />
                      <p>- {el.commentsCount}</p>
                    </div>
                    <div className="flex">
                      <ViewsIcon width={20} height={20} />
                      <p>- {el.views}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation_side;
