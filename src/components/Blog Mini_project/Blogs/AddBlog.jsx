import React, { useState } from "react";
import axios from "axios";

const AddBlog = ({ login, author }) => {
  let InputClass = "rounded-xl mx-4 p-1";
  let [newData, setNewData] = useState({});

  function onChangeHandle(value, field) {
    setNewData((prev) => ({ ...prev, [field]: value }));
  }

  function onSubmit() {
    let data = async () => {
      await axios.post("http://localhost:7000/post", newData);
      setNewData({});
    };
    data();
  }

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="p-3 font-semibold text-xl">{author} Add Your Blog</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="Title"
            onChange={(e) => onChangeHandle(e.target.value, "title")}
            className={InputClass}
            minLength={4}
            required
            type="text"
          />
          <input
            placeholder="author"
            onChange={(e) => onChangeHandle(e.target.value, "author")}
            className={InputClass}
            minLength={4}
            required
            type="text"
          />
          <input
            placeholder="genre"
            onChange={(e) => onChangeHandle(e.target.value, "genre")}
            className={InputClass}
            minLength={4}
            required
            type="text"
          />
          <input
            placeholder="authorRating"
            onChange={(e) => onChangeHandle(e.target.value, "authorRating")}
            className={InputClass}
            required
            type="number"
          />
        </div>
        <div className="flex justify-center p-4">
          <textarea
            placeholder="Researched From ?"
            onChange={(e) => onChangeHandle(e.target.value, "researchedFrom")}
            className={InputClass}
            minLength={4}
            required
            type="text"
          />

          <textarea
            placeholder="content"
            onChange={(e) => onChangeHandle(e.target.value, "content")}
            className={InputClass}
            minLength={30}
            required
            type="text"
          />

          <div>
            <p>Publish On</p>
            <input
              onChange={(e) => onChangeHandle(e.target.value, "publishDate")}
              className={InputClass}
              required
              type="date"
            />
          </div>
        </div>

        <input
          placeholder="commentsCount"
          onChange={(e) => onChangeHandle(e.target.value, "commentsCount")}
          className={InputClass}
          required
          type="number"
        />

        <input
          placeholder="likes "
          onChange={(e) => onChangeHandle(e.target.value, "likes")}
          className={InputClass}
          required
          type="text"
        />
        <input
          placeholder="tags "
          onChange={(e) => onChangeHandle(e.target.value, "tags")}
          className={InputClass}
          minLength={4}
          required
          type="text"
        />
        <input
          placeholder="views"
          onChange={(e) => onChangeHandle(e.target.value, "views")}
          className={InputClass}
          required
          type="number"
        />

        <button
          className={`rounded-lg px-4 py-2 text-white m-4  ${
            login === false
              ? `bg-green-100`
              : `bg-green-400  hover:bg-green-600 transition-all duration-300`
          }`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
