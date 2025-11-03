import React, { useContext, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";

const PaginationComp = () => {
  let { handleNext, handlePrev, currentpage, handlePageChange } =
    useContext(BlogsContext);

  return (
    <div className="text-center m-2 p-2">
      <span onClick={handlePrev} className="cursor-pointer">
        prev
      </span>
      {[...Array(7).keys()].map((n) => (
        <span
          onClick={() => handlePageChange(n)}
          className={`p-2 m-2 border-2 cursor-pointer border-blue-200  ${
            currentpage === n ? `bg-yellow-300` : ``
          }`}
          key={n}
        >
          {n}
        </span>
      ))}
      <span onClick={handleNext} className="cursor-pointer">
        Next
      </span>
    </div>
  );
};

export default PaginationComp;
