"use client"
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Our Car Dealership
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Trading Cars, your trusted partner in finding the perfect
            car. Our journey began in 2010 with a passion for connecting people
            with quality vehicles. Over the years, we have grown into a
            reputable dealership with a commitment to providing exceptional
            service and a wide selection of vehicles.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At our trading car website, we are passionate about providing you
            with the best cars at the most affordable prices. Our team of
            experts has years of experience in the automobile industry and is
            dedicated to helping you find the perfect car that suits your needs.
            We offer a wide range of cars, from luxury vehicles to
            budget-friendly options, and our inventory is constantly updated to
            ensure that you have access to the latest models. Our goal is to
            make the car-buying process as easy and stress-free as possible, and
            we are committed to providing you with exceptional customer service
            every step of the way.
          </p>

          <p className="mt-6  text-lg leading-relaxed">
            If you have any questions or concerns, please do not hesitate to
            contact us. Our friendly and knowledgeable staff is always available
            to assist you and provide you with the information you need to make
            an informed decision. Thank you for choosing our trading car
            website, and we look forward to serving you!
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-2">Jubayer</h3>
                <p className="text-gray-700">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Quality and Reliability</li>
            <li>Innovation and Excellence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
