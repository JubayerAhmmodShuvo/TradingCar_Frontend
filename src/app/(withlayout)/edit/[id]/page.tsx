"use client"
import {
  useGetServiceByIdQuery,
  useUpdateServiceByIdMutation,
} from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const UpdateServicePage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const [updatedUser, setUpdatedUser] = useState(null);
  const { data: user, refetch } = useGetServiceByIdQuery(id);
  const { role } = getUserInfo() as any;

  const [updateUserProfile, { error }] = useUpdateServiceByIdMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   alert("Updating.....");
    try {
      const formData = new FormData(e.currentTarget);
      const values: any = {};
      formData.forEach((value, key) => {
        values[key] = value;
      });

      const res = await updateUserProfile({
        id: id,
        body: values,
      }).unwrap();

      if (res?._id) {
        setUpdatedUser(res);
        router.push("/admin-table");
        refetch();
      }
    } catch (err: any) {
      console.error("Error updating service:", err);
     
    }
  };

  const userData = updatedUser || user;

  return (
     <div className="max-w-7xl mx-auto">
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Update Service
      </h1>
      <form onSubmit={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            CAR Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-1">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={userData?.title}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div className="col-span-3 lg:col-span-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={userData?.email}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <label
                htmlFor="pricing"
                className="text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="pricing"
                name="pricing"
                defaultValue={userData?.pricing}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
           
            <div className="col-span-3 lg:col-span-1">
              <label
                htmlFor="contactInfo"
                className="text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                defaultValue={userData?.contactInfo}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-3 ">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                defaultValue={userData?.description}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="text-black cursor-pointer bg-transparent hover:bg-purple-700 font-medium hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicePage;
