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

const centerAlign = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  maxWidth: "90%",
  height: "auto",
  margin: "20px",
};

const cardStyle = {
  marginBottom: "16px",
};

const responsiveCardStyle = {
  width: "100vw",
  maxWidth: "100%",
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

  
  const onAddToCart = () => {
  
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow-x-hidden">
          {/* ... Rest of the code remains the same ... */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link href={`/payment/${serviceId}`}>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={onAddToCart}
          >
            Buy
          </button>
        </Link>
      </div>
      <hr className="my-6" />
      <div className="flex">
        {/* ... Rest of the code remains the same ... */}
      </div>
    </>
  );
};

export default ViewServicePage;
