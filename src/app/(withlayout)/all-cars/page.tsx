"use client"

import Loading from "@/app/loading";
import CustomCard from "@/components/CustomCard";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import React, { useState } from "react";

const AllService = () => {
  const { data: services, isLoading } = useGetAllServiceQuery({});
  const [visibleServices, setVisibleServices] = useState(6);

  const loadMore = () => {
    setVisibleServices(visibleServices + 6);
  };

  return (
    <div className="overflow-x-hidden max-w-7xl w-full mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
          {services
            ?.slice(0, visibleServices)
            .map(
              (service: {
                _id: React.Key | string | null | undefined;
                images: string;
                title: string;
                pricing: number;
                overallRating: number;
                availability: boolean;
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
                    serviceId={service?._id as string | undefined}
                  />
                </div>
              )
            )}
        </div>
      )}
      {services && visibleServices < services.length && (
        <div className="text-center mb-20">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
            onClick={loadMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllService;
