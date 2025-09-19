import React from "react";
import Bell from "../../assets/bell.svg";

// Card Component
type CardProps = {
  title: string;
  subtitle: string;
  description: React.ReactNode; // allow JSX for <br>
  buttonText: string;
  variant?: "light" | "dark";
  showBell?: boolean;
  adjustCard?: string; // optional alignment
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  variant = "light",
  showBell = false,
  adjustCard = "",
}) => {
  return (
    <div
      className={`relative rounded-xl p-4 sm:p-6 md:p-8
        w-full
        h-auto min-h-[300px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[459px]
        flex flex-col
        ${variant === "light" ? "bg-gray-100 text-gray-800" : "bg-[#1090CB] text-white"}
        shadow-md
        ${adjustCard}
      `}
    >
      {/* Bell Icon */}
      {showBell && (
        <img
          src={Bell}
          alt="bell"
          className="absolute -top-6 xs:-top-8 sm:-top-10 md:-top-12 -right-1 
            h-12 w-12 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-[120.26px] xl:w-[120.26px]"
        />
      )}

      <div className="flex flex-col justify-start flex-grow mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        {/* Title */}
        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[25px] xl:text-[28px] font-bold text-center font-poppins mb-1 sm:mb-2 leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[25px] xl:text-[28px] font-bold text-center font-poppins mb-3 sm:mb-4 md:mb-6 leading-tight">
          {subtitle}
        </h3>

        {/* Description */}
        <p className="text-xs xs:text-sm sm:text-base lg:text-[16px] xl:text-[17px] text-center mb-4 sm:mb-6 font-poppins leading-relaxed px-1 xs:px-2 sm:px-4">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-auto">
        <button
          className={`rounded-md px-3 xs:px-4 sm:px-6 py-2 sm:py-2.5 font-medium border text-xs xs:text-sm sm:text-base font-poppins cursor-pointer
            transition-transform duration-200 ease-in-out
            hover:scale-105 hover:shadow-md active:scale-95
            ${
              variant === "light"
                ? "bg-[#1090CB] text-white border-[#1090CB]"
                : "bg-white text-[#1090CB] border-white"
            }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Cards Section
const CardsSection: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      title: "Lorem Ipsum is simply",
      subtitle: "dummy text.",
      description: (
        <>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br />
          mobile and web applications and website builders<br />
          measuring dozens of completed projects. We build and<br />
          develop mobile applications for several top platforms,<br />
          including Android & IOS.
        </>
      ),
      buttonText: "View More",
      variant: "light",
      showBell: false,
      adjustCard: "lg:mr-6",
    },
    {
      title: "Lorem Ipsum is simply",
      subtitle: "dummy text.",
      description: (
        <>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br />
          mobile and web applications and website builders<br />
          measuring dozens of completed projects. We build and<br />
          develop mobile applications for several top platforms,<br />
          including Android & IOS.
        </>
      ),
      buttonText: "View More",
      variant: "dark",
      showBell: true,
      adjustCard: "lg:ml-1",
    },
  ];

  return (
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 mt-[100px] sm:mt-[120px] md:mt-[140px] lg:mt-[160px] xl:mt-[180px] mb-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[30px] justify-items-center items-stretch">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`w-full max-w-sm sm:max-w-md md:max-w-none ${card.adjustCard}`}
          >
            <Card {...card} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardsSection;
