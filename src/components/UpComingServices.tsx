"use client";

import React, { useState } from "react";
import Link from "next/link";

const UpComingServices = () => {
  const services = [
    {
      image:
        "https://news.indigoautogroup.com/wp-content/uploads/2022/11/BMW_7series__0010_BMW-MY23-7Series-Gallery-08-800x500-1-800x500.jpg",
      title: "BMW",
      date: "August 15, 2022",
      description:
        "A description for Paintless Dent Repair. This is a short description of the service.",
      upcoming: true,
      link: "https://example.com/service1",
    },
    {
      image:
        "https://scene7.toyota.eu/is/image/toyotaeurope/All-New-Land-Cruiser-launch?wid=1280&fit=fit,1&ts=1690969422791&resMode=sharp2&op_usm=1.75,0.3,2,0",
      title: "Land Cruiser",
      date: "September 25, 2022",
      description:
        "A longer description for Underbody Rust Proofing. This is a more detailed description of the service that exceeds 40 words. A longer description for Underbody Rust Proofing. This is a more detailed description of the service that exceeds 40 words.",
      upcoming: true,
      link: "https://example.com/service2",
    },
    {
      image:
        "https://i.pinimg.com/736x/5e/91/64/5e91642a14b6b87b4cfeb3250914adc4.jpg",
      title: "Jaguar",
      date: "September 5, 2022",
      description:
        "A description for Ceramic Coating. This is another short description of the service.",
      upcoming: true,
      link: "https://example.com/service2",
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [title: string]: boolean;
  }>({});

  const toggleDescription = (title: string) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [title]: !expandedDescriptions[title],
    });
  };

  return (
    <div className="max-w-7xl w-full mx-auto overflow-x-hidden">
      <div className="m-10">
        <h1 className="text-center my-10 italic text-purple-700 font-semibold font-serif text-2xl">
          Upcoming Cars
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service?.title}
              className={`overflow-hidden shadow-md ${
                service.upcoming ? "relative" : ""
              }`}
            >
              {service.upcoming && (
                <span className="bg-green-500 text-white py-1 px-2 absolute top-0 right-0 -mt-1 -mr-1">
                  Upcoming
                </span>
              )}
              <div className="overflow-hidden h-48">
                <img
                  alt={service?.title}
                  src={service?.image}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 p-4">
                <h2 className="text-lg font-semibold">{service?.title}</h2>
                {service.upcoming && (
                  <p className="text-gray-600">
                    {expandedDescriptions[service?.title]
                      ? service?.description
                      : `${service?.description.slice(0, 40)}${
                          service?.description.length > 40 ? "..." : ""
                        }`}
                  </p>
                )}
                {service.description.length > 40 && (
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleDescription(service.title)}
                  >
                    {expandedDescriptions[service.title]
                      ? "Show Less"
                      : "Show More"}
                  </button>
                )}
                {!service.upcoming && (
                  <p className="text-gray-600">{service.date}</p>
                )}
                <Link
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Your link content here */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingServices;
