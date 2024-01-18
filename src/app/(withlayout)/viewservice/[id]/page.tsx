"use client";





import React, { useState } from "react";
import {
  useAddReviewMutation,
  useGetServiceByIdQuery,
} from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { commentSchema } from "@/schemas/comment";
import { yupResolver } from "@hookform/resolvers/yup";

type IDProps = {
  params: any;
};

const ViewServicePage = ({ params }: IDProps) => {
  const id = params.id;
  const { data: service } = useGetServiceByIdQuery(id);
  const { role, name, id: userId } = getUserInfo() as any;
  const [visibleComments, setVisibleComments] = useState(4);

  const showMoreComments = () => {
    setVisibleComments((prev) => prev + 4);
  };

  const serviceId: string = service?._id;
  const [addReview, { error }] = useAddReviewMutation();
   const [formData, setFormData] = useState({
     rating: "",
     comment: "",
   });

  const onSubmitReview = async (e:any) => {
    e.preventDefault();
    try {
      const values = {
        rating: parseFloat(formData.rating),
        comment: formData.comment,
        name: name,
      };

   
      const response = await addReview({ id: serviceId, body: values });

      if (response) {
        
        console.log("Review added successfully");
        
        setFormData({
          rating: "",
          comment: "",
        });
      } else {
       
        console.error("Failed to add review");
      }
    } catch (err:any) {
      console.error(err.message);
    }
  };

  const onChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="max-w-7xl w-full mx-auto overflow-x-hidden">
      <div className="mb-8 my-10 text-center">
        <img
          src={service?.images}
          alt={service?.title}
          className="w-full max-w-2xl mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-purple-700 mb-2 mt-8">
          {service?.title}
        </h1>
        <p className="text-gray-600">{service?.description}</p>
        <div className="flex items-center mt-4 text-center">
          <span className="text-purple-700 font-bold text-center">Price:</span>
          <span className="ml-2">${service?.pricing}</span>
        </div>

        <div className="flex items-center mt-2 text-center">
          <span className="text-purple-700 font-bold">Availability:</span>
          <span className="ml-2">
            {service?.availability ? "Available" : "Out of Stock"}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-purple-700 font-bold">Location:</span>
          <span className="ml-2">{service?.location}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-purple-700 font-bold">Contact Info:</span>
          <span className="ml-2">{service?.contactInfo}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-purple-700 font-bold">Rating:</span>

          <span className="ml-2">{service?.overallRating.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 ">
        <Link href={`/payment/${serviceId}`}>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </Link>
      </div>

      <div className="mx-auto items-center justify-center">
        <div className="mt-6 mx-auto ">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Add Your Review
          </h2>
          <form onSubmit={onSubmitReview}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="  my-auto">
                <label
                  className=" text-purple-700 font-bold mt-2 "
                  htmlFor="rating"
                >
                  Rating (1-5)
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-500"
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={onChange}
                  placeholder="Enter rating"
                  max="5"
                />
                {parseInt(formData.rating, 10) > 5 && (
                  <p className="text-red-500 text-sm mt-1">
                    Rating should be between 1 and 5.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-purple-700 font-bold mb-2"
                  htmlFor="comment"
                >
                  Comment
                </label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-500"
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={onChange}
                  rows={4}
                  placeholder="Write your review here"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
                  Number(formData?.rating) > 5 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={Number(formData?.rating) > 5}
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="my-6" />
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          User Reviews
        </h2>
        <ul>
          {service?.userReviews
            .slice(0, visibleComments)
            .map(
              (review: {
                _id: React.Key | null | undefined;
                name:
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
                comment:
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
                rating:
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
                <li key={review?._id} className="mb-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-purple-700 font-bold">
                      Name: {review?.name}
                    </p>
                    <p className="mt-2">Comment: {review?.comment}</p>
                    <p className="mt-2">Rating: {review?.rating}</p>
                  </div>
                </li>
              )
            )}
        </ul>
        {visibleComments < service?.userReviews.length && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={showMoreComments}
            >
              Show More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewServicePage;
