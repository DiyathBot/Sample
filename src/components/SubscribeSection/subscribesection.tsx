import React from "react";

// Import partner logos
import partner1 from "../../assets/image4.svg";
import partner2 from "../../assets/image5.svg";
import partner3 from "../../assets/image6.svg";
import partner4 from "../../assets/image7.svg";
// import Yellow from "../../assets/yellow.svg";

// Import subscribe section assets
import Star from "../../assets/star.svg";
import Chart from "../../assets/chart.svg";

const SubscribeSection: React.FC = () => {
  // Other partners (excluding Yellow)
  const partners = [partner1, partner2, partner3, partner4];

  return (
    <div className="bg-white relative">
      {/* Yellow Partner on the left side */}
      {/* <img
        src={Yellow}
        alt="Yellow Partner"
        className="absolute left-0 top-1/4 h-30 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-[185px] xl:w-[185px] object-contain z-20"
      /> */}

      {/* Partners Section */}
      <div className="w-full max-w-[1536px] mx-auto py-8 sm:py-12 md:py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 relative z-10">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 md:mb-11 text-gray-800 font-poppins mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[90px] leading-tight">
          You will be in good Company
        </h2>

        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-22 justify-items-start items-center justify-center">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-24 w-24 sm:h-30 sm:w-30 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-[185px] xl:w-[185px] object-contain transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* Star - boundary between sections */}
      <div className="relative h-0 flex justify-center">
        <img
          src={Star}
          alt="Star"
          className="absolute -top-4 left-[130px] sm:-top-6 md:-top-8 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-[66px] xl:w-[66px] z-10"
        />
      </div>

      {/* Subscribe Section */}
      <div className="relative bg-[#eaf6fc] py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[534px]">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative">
          {/* Chart - top right */}
          <img
            src={Chart}
            alt="Chart"
            className="absolute top-4 sm:top-6 md:top-8 lg:top-12 xl:top-25 right-4 sm:right-8 md:right-12 lg:right-20 xl:right-115 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-[54px] xl:w-[54px] z-10"
          />

          {/* Content Container */}
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] font-semibold text-gray-800 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4 mb-6 sm:mb-8 font-poppins mt-12 sm:mt-16 md:mt-20 lg:mt-24 leading-tight">
              Lorem Ipsum is simply dummy <br className="hidden sm:block" /> text of the printing.
            </h2>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mt-8 sm:mt-12 md:mt-16 lg:mt-[70px] w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 h-14 px-4 rounded-lg shadow-sm border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
              />
              <button className="w-full sm:w-auto sm:px-6 h-14 bg-black text-white font-semibold uppercase hover:bg-gray-900 transition rounded-lg text-base cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
