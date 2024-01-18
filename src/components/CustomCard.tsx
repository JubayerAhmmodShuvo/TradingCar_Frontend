"use client";
import React from "react";
import Link from "next/link";


interface CustomCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  availability: boolean;
  onAddToCart: () => void;
  onDetails: () => void;
 serviceId: string | undefined; 
}


const CustomCard: React.FC<CustomCardProps> = ({
  image,
  title,
  price,
  rating,
  availability,
  onAddToCart,
  onDetails,
  serviceId,
}) => (
  <div className="max-w-xs mx-auto  rounded overflow-hidden shadow-lg my-4">
    <img className="w-full h-40 object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="flex items-center mb-2">
        <div className="text-gray-700 text-base">{title}</div>
      </div>
      <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
      <div className="flex items-center mb-2">
        <p className="text-gray-700 text-base">Rating: {rating.toFixed(2)}</p>
      </div>
    </div>
    <div className="px-6 py-4 flex justify-between">
      <Link href={`/payment/${serviceId}`}>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none"
          onClick={onAddToCart}
        >
          Buy
        </button>
      </Link>
      <Link href={`/viewservice/${serviceId}`}>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 focus:outline-none"
          onClick={onDetails}
        >
          Details
        </button>
      </Link>
    </div>
  </div>
);

export default CustomCard;
