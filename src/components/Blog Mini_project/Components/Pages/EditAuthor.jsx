import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import RichTextEditor from "./RichTextEditor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const EditAuthor = () => {
  let { id } = useParams();
  let [author, setAuthor] = useState(null);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get(
        `http://localhost:7000/fetchAuthorId/${id}`
      );
      // API returns an array; pick the first item
      setAuthor(
        Array.isArray(response.data) ? response.data[0] : response.data
      );
    };
    data();
  }, [id]);

  let AuthorSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Name Too Short" })
      .max(25, { message: "Name Too Long" }),
    email: z.email({ message: "Invalid email address" }),
    insta: z.string().min(5, {
      message: "Invalid Instagram handle",
    }),
    description: z
      .string()
      .min(20, { message: " Description too short " })
      .max(1000, { message: " Description too long " }),
  });

  const InputClass = "rounded-xl mx-4 p-1 w-full";
  const errorClass = "m-2 font-thin text-red-500";

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AuthorSchema), mode: "onChange" });

  // When author loads, prefill the form fields
  useEffect(() => {
    if (author) {
      reset({
        name: author.name || "",
        email: author.email || "",
        insta: author.insta || "",
        description: author.description || "",
      });
    }
  }, [author, reset]);

  function onSubmit(edits) {
    let data = async () => {
      await axios.put(`http://localhost:7000/updateAuthor/${id}`, edits);
    };
    data();
  }

  return (
    <div className="bg-teal-200 rounded-lg m-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <h1 className="text-center font-medium text-2xl mb-5">Author</h1>
        {author !== null && (
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-[40%] mb-4 text-center ">
              <p className="mb-2 font-semibold">Full Name</p>
              <input {...register("name")} className={InputClass} type="text" />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>
            <div className="w-[40%]  mb-4 text-center ">
              <p className="mb-2 font-semibold"> E-mail</p>
              <input
                {...register("email")}
                className={InputClass}
                type="text"
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>

            <div className="w-[40%]  mb-4 text-center ">
              <p className="mb-2 font-semibold">Insta Url</p>
              <input
                {...register("insta")}
                className={InputClass}
                type="text"
              />
              {errors.insta && (
                <p className={errorClass}>{errors.insta.message}</p>
              )}
            </div>

            <div className="w-[80%]  mb-4 text-center ">
              <p className="mb-2 font-semibold">Description</p>

              <Controller
                name="description"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <RichTextEditor
                    {...field}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />

              {errors.description && (
                <p className={errorClass}>{errors.description.message}</p>
              )}
            </div>
            <div className="w-full flex m-3 justify-center">
              <button className="bg-teal-100 p-3 rounded-xl text-green-950 mx-3">
                Done
              </button>
              <NavLink to={"/OperationAuthors"}>
                <button className="p-3 hover:text-red-500 transition-all">
                  Back
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditAuthor;
