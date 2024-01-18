import React from "react";
import revenue from "../assets/revenue.png";
import review from "../assets/review.png";
import customer from "../assets/customer.png";
import tools from "../assets/tools.png";
import Image from "next/image";

const Summary = () => {
  return (
    <div className="my-32 max-w-7xl w-full mx-auto">
      <div className=" ">
        <p className=" text-2xl font-semibold mb-4 font-serif   text-center ">
          WE WORK HARD, WE PLAY HARD
        </p>
        <h1 className="text-center text-4xl font-bold  font-serif text-purple-700  mb-16 ">
          OUR USER EXPECTATIONS
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 my-20">
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={revenue}
              alt="Your Alt Text"
              width={300}
              height={250}
              className="w-36"
            />
            <h1 className="text-5xl font-extrabold text-center italic text-purple-500   ">
              900M
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-purple-700">
              Annul Revenue
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={customer}
              alt="Your Alt Text"
              width={300}
              height={250}
              className="w-36"
            />

            <h1 className="text-5xl font-extrabold text-center italic text-purple-500  ">
              12000+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-purple-700	">
              Happy Clients
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={review}
              alt="Your Alt Text"
              width={300}
              height={250}
              className="w-36"
            />

            <h1 className="text-5xl font-extrabold text-center italic text-purple-500  ">
              313k+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-purple-700">
              Total Review
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={tools}
              alt="Your Alt Text"
              width={300}
              height={250}
              className="w-36"
            />

            <h1 className="text-5xl font-extrabold text-center  italic text-purple-500">
              50+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-purple-700">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
