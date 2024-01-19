"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { uploadCloudinary } from "@/types/uploads";

import { Form, Field, useForm } from "react-hook-form";

const AddCar = () => {
  const router = useRouter();
  const [addService] = useCreateServiceMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

   const [image, setImage] = useState<File | null>(null);

   const onSubmit = async (data: any) => {
     try {
       if (image) {
         const carImage = await uploadCloudinary(image);
         data.images = carImage.url; 
       }

       const response = await addService(data);

       if (response) {
         alert("Service created successfully!");
         router.push("/admin-table");
       } else {
         alert("Service creation failed.");
       }
     } catch (err: any) {
       console.error(err.message);
     }
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0] || null;
     setImage(file);
   };


  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-5">Add Car</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-gray-300 p-4 rounded mb-6">
          <p className="text-xl font-semibold mb-3">Car Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Car Name
              </label>
              <input
                type="text"
                {...register("title", { required: "Order Name is required" })}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <input
                type="text"
                {...register("description", {
                  required: "Description is required",
                })}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: "Email is required" })}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                {...register("pricing", { required: "Price is required" })}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Location
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Contact Info
              </label>
              <input
                type="text"
                {...register("contactInfo")}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
          >
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
