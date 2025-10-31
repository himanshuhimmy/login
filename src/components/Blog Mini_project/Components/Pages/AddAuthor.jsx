import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { NavLink } from "react-router-dom";

const authorSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 5 characters" })
    .max(30, { message: "Name too long" }),
  insta: z.string().regex(/^@?([a-zA-Z0-9._]{1,30})$/, {
    message: "Invalid Instagram handle",
  }),
  email: z.email({ message: "Invalid email address" }),
  description: z
    .string()
    .min(20, { message: " Description too short " })
    .max(200, { message: " Description too long " }),
});

const InputClass = "rounded-xl mx-4 p-1";
const errorClass = "m-2 font-thin text-red-500";

const AddAuthor = () => {
  const [file, setFile] = useState(null);

  async function onSubmit(data) {
    let NewAuthor = new FormData();

    NewAuthor.append("name", data.name);
    NewAuthor.append("email", data.email);
    NewAuthor.append("insta", data.insta);
    NewAuthor.append("description", data.description);
    if (file) NewAuthor.append("AuthorProfile", file);

    console.log([...NewAuthor]);

    const response = await axios.post(
      "http://localhost:7000/addingNewAuthor",
      NewAuthor,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data);
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(authorSchema), mode: "onChange" });
  return (
    <div className="bg-teal-200 m-4 rounded-lg p-3">
      <div>
        <h1 className="text-center font-semibold text-2xl mb-4">
          Add a New Author
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="p-6 bg-teal-100 rounded-lg"
        >
          <div className="text-center">
            <h1 className="font-semibold">Add Image</h1>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="text-center">
            <h1 className="font-semibold">Authors Full Name</h1>
            <input className={InputClass} {...register("name")} type="text" />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div className="text-center w-[80%] m-auto">
            <h1 className="font-semibold"> Description</h1>
            <textarea
              {...register("description")}
              className="w-full p-1 rounded-md m-2"
              type="text"
            />
            {errors.description && (
              <p className={errorClass}>{errors.description.message}</p>
            )}
          </div>

          <div className="text-center flex justify-evenly">
            <div>
              <h1 className="font-semibold">E-MAIL</h1>
              <input
                {...register("email")}
                className={InputClass}
                type="text"
              />
              {errors.email && (
                <p className={errorClass}>{errors.email.message}</p>
              )}
            </div>
            <div>
              <h1 className="font-semibold">Insta Handle</h1>
              <input
                {...register("insta")}
                className={InputClass}
                type="text"
              />
              {errors.insta && (
                <p className={errorClass}>{errors.insta.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-evenly mt-5">
            <button className="bg-gray-200 px-3 py-2 text-green-600 rounded-md hover:bg-gray-400 hover:text-white transition-all duration-300">
              Add Author
            </button>

            <NavLink to={".."}>
              <button>Back</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAuthor;
