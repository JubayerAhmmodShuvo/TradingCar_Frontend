"use client";

const HeroSection = () => {
  return (
    <div className="mt-7  ">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="#FFF8E3"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://carsome.my/news/wp-content/uploads/2022/10/Hyperion_XP1-3_4-studio.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full  px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
            <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              TradingCar
              <br className="hidden md:block  " />
              Your Next Car,{" "}
              <span className="inline-block font-serif text-purple-500 mt-3">
                Elevate Your Comfort.
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base font-serif text-gray-700 md:text-lg">
              Drive into Excellence. Explore a handpicked collection of stylish
              and reliable vehicles. Cruise with confidence at CarHub – where
              performance meets practicality. Elevate your journey in every
              mile.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-800  p-2 hover:bg-purple-700 focus:outline-none focus:bg-gray-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
