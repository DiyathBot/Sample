import React from "react";
import boyLaptop from "../../assets/image.svg";
import Blue from "../../assets/image8.svg";
import Green from "../../assets/image9.svg";
import Orange from "../../assets/orange.svg";

// Import feature images
import webImg from "../../assets/web.svg";
import seoImg from "../../assets/seo.svg";
import arvrImg from "../../assets/arvr.svg";
import mobileImg from "../../assets/mobile.svg";

const images = [webImg, seoImg, arvrImg, mobileImg];

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-sky-100 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Image First on Mobile, Second on Desktop */}
          <div className="flex-1 order-1 lg:order-2 mt-8 sm:mt-10 lg:mt-0 flex justify-center relative">
            <img
              src={Orange}
              alt="Orange Background"
              className="absolute -top-2 left-10 sm:-top-1 sm:left-12 md:top-2 md:left-16 lg:top-4 lg:left-20 lg:-right-8 w-48 sm:w-60 md:w-72 lg:w-96 xl:w-[520px] z-0"
            />
            <img
              src={boyLaptop}
              alt="Boy with laptop"
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[597px] max-w-full h-auto drop-shadow-lg z-10"
            />
          </div>

          {/* Text Second on Mobile, First on Desktop */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8 max-w-lg lg:max-w-xl xl:max-w-2xl mt-6 lg:mt-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-snug text-gray-900 animate-fade-in-up">
              <span className="inline-block animate-slide-in-left">Experienced</span>{" "}
              <span className="text-[#1090CB] inline-block animate-slide-in-right animation-delay-300">mobile and web </span>
              <span className="inline-block animate-fade-in animation-delay-600">applications and website builders measuring.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-800">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in-up animation-delay-1000">
              <button className="bg-[#1090CB] w-full sm:w-[193px] h-[51px] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow hover:bg-[#1090CB] transition text-sm sm:text-base cursor-pointer">
                Contact us
              </button>
              <button className="border w-full sm:w-[193px] h-[51px] border-[#1090CB] text-[#1090CB] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition text-sm sm:text-base cursor-pointer">
                View more
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Blue Shape - hidden on small screens */}
        <div className="absolute top-1/4 right-0 h-full z-0 hidden md:block">
          <img
            src={Blue}
            alt="Blue Shape"
            className="h-48 w-6 sm:h-64 sm:w-8 md:h-80 md:w-10 lg:h-[366px] lg:w-[47px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 relative z-10 ">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 ">
          {/* Feature Logos */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-start">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`Feature ${i + 1}`}
                  className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal line */}
        <div className="mt-12 border-t border-gray-200 w-full"></div>

        {/* Decorative Green Shape - hidden on small screens */}
        <div className="absolute left-0 bottom-10 sm:bottom-20 md:bottom-30 hidden md:block">
          <img
            src={Green}
            alt="Green Shape"
            className="h-32 w-8 sm:h-40 sm:w-10 md:h-48 md:w-12 lg:h-[210px] lg:w-[58px]"
          />
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;