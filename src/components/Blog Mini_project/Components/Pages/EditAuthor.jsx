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
  let [changes, setChanges] = useState(null);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get(
        `http://localhost:7000/fetchAuthorId/${id}`
      );
      setAuthor(response.data);
    };
    data();
  }, []);

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
    formState: { errors },
  } = useForm({ resolver: zodResolver(AuthorSchema), mode: "onChange" });

  function HandleEdit(field, value) {
    setChanges((prev) => ({ ...prev, [field]: value }));

    //   if (changes !== null) {
    //     let data = async () => {
    //       let response = await axios.get(
    //         `http://localhost:7000/updateAuthor/${id}`,
    //         changes
    //       );
    //       // setChanges(response.data);
    //     };
    //     data();
    //     setChanges(null);
    //   }
  }

  function onSubmit(edits) {
    let data = async () => {
      let response = await axios.put(
        `http://localhost:7000/updateAuthor/${id}`,
        edits
      );
      setChanges(response.data);
    };
    data();
  }

  return (
    <div className="bg-teal-200 rounded-lg m-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <h1 className="text-center font-medium text-2xl mb-5">Author</h1>
        {author !== null &&
          author.map((el) => {
            return (
              <div className="w-full flex flex-wrap justify-evenly">
                <div className="w-[40%] mb-4 text-center ">
                  <p className="mb-2 font-semibold">Full Name</p>
                  <input
                    {...register("name")}
                    className={InputClass}
                    defaultValue={el.name}
                    type="text"
                    onChange={(e) => HandleEdit(`name`, e.target.value)}
                  />
                  {errors.name && (
                    <p className={errorClass}>{errors.name.message}</p>
                  )}
                </div>
                <div className="w-[40%]  mb-4 text-center ">
                  <p className="mb-2 font-semibold"> E-mail</p>
                  <input
                    {...register("email")}
                    className={InputClass}
                    defaultValue={el.email}
                    type="text"
                    onChange={(e) => HandleEdit(`email`, e.target.value)}
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
                    defaultValue={el.insta}
                    type="text"
                    onChange={(e) => HandleEdit(`insta`, e.target.value)}
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
                    defaultValue={el.description || ""} // Ensure default is a string
                    render={({ field }) => (
                      <RichTextEditor
                        {...field} // connects value & onChange
                        onChange={(val) => field.onChange(val)} // make sure changes propagate
                      />
                    )}
                  />

                  {/* <RichTextEditor
                    value={el.description}
                    onChange={(e) => HandleEdit(`description`, e)}
                  /> */}

                  {errors.description && (
                    <p className={errorClass}>{errors.description.message}</p>
                  )}
                </div>
                <div className="w-full flex m-3 justify-center">
                  <button className="bg-teal-100 p-3 rounded-xl text-green-950 mx-3">
                    Done
                  </button>
                  <NavLink to={".."}>
                    <button className="p-3 hover:text-red-500 transition-all">
                      Back
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default EditAuthor;
