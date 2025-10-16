import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RichTextEditor from "./RichTextEditor";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(40, { message: "Title too long" })
    .nonempty({ message: "Title is required" }),
  price: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number().min(0, { message: "Price must be positive" })
  ),
  description: z
    .string()
    .min(10, { message: "Description too short" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
  author: z
    .string()
    .min(3, { message: "Author name too short" })
    .max(30, { message: "Author name too long" }),
});

const PracticeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      author: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 bg-gray-100 rounded-lg max-w-md mx-auto shadow"
    >
      <div>
        <label className="block font-medium mb-1">Title:</label>
        <input {...register("title")} className="border p-2 w-full rounded" />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Price:</label>
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          className="border p-2 w-full rounded"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Description:</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <RichTextEditor
              value={field.value}
              onChange={(val) => {
                const textOnly = val.replace(/<[^>]*>/g, "").trim();
                field.onChange(textOnly);
              }}
            />
          )}
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className=" font-medium mb-2"> Author</label>
        <input {...register("author")} className="border p-2 w-full rounded" />
        {errors.author && (
          <p className="text-red-500 text-sm mt-1"> {errors.author.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default PracticeForm;
