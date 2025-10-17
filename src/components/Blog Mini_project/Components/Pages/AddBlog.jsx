import React, { useContext, useState } from "react";
import axios from "axios";
import BlogsContext from "../../Store-Context/BlogsContext";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RichTextEditor from "./RichTextEditor";
import { NavLink } from "react-router-dom";

const BlogSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(100, { message: "Title too long" })
    .nonempty({ message: "Title is required" }),
  author: z
    .string()
    .min(3, { message: "Author name too short" })
    .max(50, { message: "Author name too long" }),
  genre: z
    .string()
    .min(3, { message: "Genre too short" })
    .max(50, { message: "Genre too long" }),
  content: z
    .string()
    .min(20, { message: "Content too short" })
    .max(2000, { message: "Content too long" })
    .nonempty({ message: "Content is required" }),
  publishDate: z.string(),
  tags: z.string().optional(),
  researchedFrom: z.string(),
  image: z.string().url().optional(),
});

const AddBlog = () => {
  const { activeAuthor, loginStstus } = useContext(BlogsContext);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BlogSchema),
    mode: "onChange",
  });

  const InputClass = "rounded-xl mx-4 p-1";
  const errorClass = "m-2 font-thin text-red-500";

  const onSubmit = async (data) => {
    const likesRandom = Math.floor(Math.random() * 1001);
    const commentsRandom = Math.floor(Math.random() * 26);
    const viewsRandom = Math.floor(Math.random() * 500);
    const authorRatingRandom = Math.floor(Math.random() * 5);

    const formData = new FormData();

    if (data.tags) {
      data.tags
        .split(",")
        .forEach((tag) => formData.append("tags", tag.trim()));
    }
    if (data.researchedFrom) {
      data.researchedFrom
        .split(",")
        .forEach((r) => formData.append("researchedFrom", r.trim()));
    }

    formData.set("likes", likesRandom);
    formData.set("commentsCount", commentsRandom);
    formData.set("views", viewsRandom);
    formData.set("authorRating", authorRatingRandom);

    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("genre", data.genre);
    formData.append("content", data.content);
    formData.append("publishDate", data.publishDate);

    if (file) formData.append("BlogProfile", file);

    console.log(formData);
    const response = await axios.post("http://localhost:7000/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Blog uploaded:", response.data);
  };

  return (
    <div className="bg-gray-200 m-4 rounded-lg p-5">
      <h1 className="p-3 font-semibold text-xl text-center">
        {activeAuthor} Add Your Blog
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="p-6 bg-teal-100 rounded-lg"
      >
        <div className="text-center mb-4">
          <label className="font-semibold">Add Image</label>
          <input
            type="file"
            className="p-3 mt-2"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <div className="flex justify-evenly w-full mb-4">
          <div>
            <label>Title</label>
            <input {...register("title")} className={InputClass} />
            {errors.title && (
              <p className={errorClass}>{errors.title.message}</p>
            )}
          </div>
          <div>
            <label>Author</label>
            <input {...register("author")} className={InputClass} />
            {errors.author && (
              <p className={errorClass}>{errors.author.message}</p>
            )}
          </div>
          <div>
            <label>Genre</label>
            <input {...register("genre")} className={InputClass} />
            {errors.genre && (
              <p className={errorClass}>{errors.genre.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label>Content</label>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => <RichTextEditor {...field} />}
          />

          {errors.content && (
            <p className={errorClass}>{errors.content.message}</p>
          )}
        </div>

        <div className="flex justify-evenly w-full mb-4 text-center">
          <div>
            <label className="font-medium mb-3">
              Researched From (comma-separated)
            </label>
            <input {...register("researchedFrom")} className={InputClass} />
          </div>
          <div>
            <label className="font-medium mb-3">Tags (comma-separated)</label>
            <input {...register("tags")} className={InputClass} />
          </div>
          <div>
            <label className="font-medium mb-3">Publish Date</label>
            <input
              type="date"
              {...register("publishDate")}
              className={InputClass}
            />
            {errors.publishDate && (
              <p className={errorClass}>{errors.publishDate.message}</p>
            )}
          </div>
        </div>

        <div className="text-center">
          <button
            className={`rounded-lg px-4 py-2 text-white m-4 ${
              loginStstus === false
                ? "bg-green-100"
                : "bg-green-400 hover:bg-green-600 transition-all duration-300"
            }`}
          >
            Add
          </button>

          <NavLink
            to="/"
            className={`rounded-lg px-4 py-2 text-white m-4 ${
              loginStstus === false
                ? "bg-stone-200"
                : "bg-stone-400 hover:bg-stone-600 transition-all duration-300"
            }`}
          >
            Back
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
