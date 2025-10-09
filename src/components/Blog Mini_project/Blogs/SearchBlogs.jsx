import React from "react";

const SearchBlogs = ({ search, setSearch }) => {
  let InputClass = "rounded-xl m-4 p-1";

  function handleOnchange(e, field) {
    setSearch((prev) => ({ ...prev, [field]: e }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="p-2 bg-gray-300">
      <div className=" flex justify-center">
        <div className="p-4">
          <samp className="text-gray-800 font-semibold">Select Authors </samp>
          <select
            onChange={(e) => handleOnchange(e.target.value, `author`)}
            className="p-2 rounded-lg bg-slate-200 text-gray-600"
            name="Authors"
            id=""
          >
            <option value="">Select an Author</option>
            <option value="Himanshu Chauhan"> Himanshu Chauhan</option>
            <option value="Pratik Vora"> Pratik Vora</option>
            <option value="Deepraj Gupta"> Deepraj Gupta</option>
            <option value="Roman Reigns">Roman Reings</option>
            <option value="Guts Beserk">Guts Beserk</option>
          </select>
        </div>
        <div className="p-4">
          <samp className="text-gray-800 font-semibold">Search By Genres </samp>
          <select
            onChange={(e) => handleOnchange(e.target.value, `genre`)}
            className="p-2 rounded-lg bg-slate-200 text-gray-600"
            name="Authors"
            id=""
          >
            <option value="">Select Genres</option>
            <option value="Motivation"> Motivation</option>
            <option value="Self-Improvement">Self-Improvement</option>
            <option value="Mindset">Mindset</option>
            <option value="Fitness">Fitness</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Leadership">Leadership</option>
            <option value="Technology">Technology</option>
            <option value="Artificial Intelligence">AI</option>
            <option value="Discipline">Discipline</option>
            {/* <option value="Personal Growth">Personal Growth</option> */}
          </select>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              onChange={(e) => handleOnchange(e.target.value, `title`)}
              required
              placeholder="Search By Title"
              className={InputClass}
              type="text"
            />
            <button className="p-2   text-green-500 hover:text-green-800 transition-all duration-300">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBlogs;
