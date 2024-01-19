"use client";
import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Link from "next/link";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";

const AvailableService = () => {
  const { data: services, isLoading } = useGetAllServiceQuery({});
  const [visibleServices, setVisibleServices] = useState(6);

  const loadMore = () => {
    setVisibleServices(visibleServices + 6);
  };

  return (
    <div className="max-w-7xl w-full mx-auto overflow-x-hidden">
      <h1 className="text-center my-10 italic text-purple-700 font-semibold font-serif text-2xl">
        Available Service
      </h1>

      {services && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {services?.slice(0, visibleServices).map(
            (service: {
              _id: string; 
              images: string;
              title: string;
              pricing: number;
              overallRating: number;
              availability: boolean;
              serviceId: string;
            }) => (
              <div key={service?._id}>
                <CustomCard
                  image={service?.images}
                  title={service?.title}
                  price={service?.pricing}
                  rating={service?.overallRating}
                  availability={service?.availability}
                  onAddToCart={() => {}}
                  onDetails={() => {}}
                  serviceId={service?._id}
                />
              </div>
            )
          )}
        </div>
      )}

      {services && visibleServices < services?.length && (
        <div className="text-center p-4">
          <Link href={`/all-cars`}>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none"
              onClick={loadMore}
            >
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AvailableService;

