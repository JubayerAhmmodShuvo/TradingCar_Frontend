"use client"

import { useDeleteServiceMutation, useGetAllServiceQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";

function Table() {
 

   const { data, isLoading } = useGetAllServiceQuery(
     {},
     { refetchOnMountOrArgChange: true, pollingInterval: 3000 }
   );
   const service = data || [];

   const [deleteService] = useDeleteServiceMutation();
   const [serviceToDelete, setServiceToDelete] = useState<any>(null);
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const handleDelete = async () => {
     if (serviceToDelete) {
       try {
         const res = await deleteService(serviceToDelete?._id);
         if (res) {
           alert("Deleted Successfully");
           setServiceToDelete(null);
           closeDeleteModal();
         }
       } catch (error: any) {
         console.error("Delete Error:", error);
       }
     }
   };

   const openDeleteModal = (item: any) => {
     setServiceToDelete(item);
     setIsDeleteModalOpen(true);
   };

   const closeDeleteModal = () => {
     setServiceToDelete(null);
     setIsDeleteModalOpen(false);
   };

  return (
    <div className=" min-h-screen py-2 max-w-7xl mx-auto mt-4 ">
      <h1 className="text-3xl font-bold text-purple-900 font-serif text-center">
        Table
      </h1>
      <div className=" w-full px-4 overflow-x-auto">
        <table className="table-auto border-collapse w-full mt-6">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-purple-900 font-serif font-bold">
                Title
              </th>
              <th className="border border-gray-400 px-4 py-2 text-purple-900 font-serif font-bold">
                Pricing
              </th>
              <th className="border border-gray-400 px-4 py-2 text-purple-900 font-serif font-bold">
                Email
              </th>
              <th className="border border-gray-400 px-4 py-2 text-purple-900 font-serif font-bold">
                Delete
              </th>
              <th className="border border-gray-400 px-4 py-2 text-purple-900 font-serif font-bold">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {service?.map(
              (item: {
                _id: React.Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
                pricing:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
                email:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) => (
                <tr key={item?._id}>
                  <td className="border border-gray-400 px-4 py-2 text-gray-800 font-medium">
                    {item?.title}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-gray-800 font-medium">
                    {item?.pricing}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-gray-800 font-medium">
                    {item?.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-red-500 font-medium  text-center">
                    <button onClick={() => openDeleteModal(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center text-purple-800 font-medium">
                    <button>
                      <Link href={`/edit/${item?._id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </Link>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Service Modal"
      >
        <div className="mx-auto text-center">
          <p className="mt-8">Are you sure you want to delete this service?</p>
          <button
            onClick={handleDelete}
            className="btn btn-danger mx-8 mt-8 bg-red-500 p-3 rounded"
          >
            Yes, Delete
          </button>
          <button
            className="btn btn-danger mx-8 bg-green-600 p-3 rounded"
            onClick={closeDeleteModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Table;
