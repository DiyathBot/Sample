import React from "react";
import boyImage from "../../assets/image1.svg";
import webLayersImage from "../../assets/image2.svg";
import vrMan from "../../assets/image3.svg";
import happyImage from "../../assets/happy.svg";
import happy1Image from "../../assets/happy1.svg";
import happy2Image from "../../assets/happy2.svg";

const ImageContentSection: React.FC<{
  section: any;
  imagePosition: "left" | "right";
}> = ({ section, imagePosition }) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`${section.bgColor} ${section.padding}`}>
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
        {/* Image */}
        <div
          className={`flex justify-center ${
            isImageLeft
              ? "order-1 lg:order-1 lg:pr-12"
              : "order-1 lg:order-2 lg:pl-12"
          } ${section.adjustImage || ""}`}
        >
          <img
            src={section.image}
            alt={section.imageAlt}
            className={section.imageClasses}
          />
        </div>

        {/* Content */}
        <div
          className={`text-center lg:text-left space-y-4 sm:space-y-6 ${
            isImageLeft
              ? "order-2 lg:order-2 lg:pl-12"
              : "order-2 lg:order-1 lg:pr-12"
          } ${section.adjustContent || ""}`}
        >
          {/* Happy Icon + Text */}
          <div className="flex items-start sm:items-center justify-center lg:justify-start mb-[43px]">
            <img
              src={section.happyIcon}
              alt="Happy Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0 mt-1 sm:mt-0"
            />
            <div className="ml-2 sm:ml-3 text-left">
              <p className="font-semibold text-sm sm:text-base text-gray-800 leading-tight">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="text-[#1090CB]">{section.titleBlueText}</span>{" "}
            {section.titleFirstLine}
            <br />
            {section.titleSecondLine}
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br />
            mobile and web applications and website builders <br />
            measuring dozens of completed projects. We build and <br />
            develop mobile applications for several top platforms, <br />
            including Android & iOS.
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const sectionsData = [
    {
      id: 1,
      bgColor: "bg-white",
      image: boyImage,
      imageAlt: "Mobile App Preview",
      happyIcon: happyImage,
      padding: "py-8 sm:py-12 md:py-16",
      imageClasses:
        "w-full max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-xl mx-auto",
      titleBlueText: "Lorem Ipsum",
      titleFirstLine: "is simply dummy",
      titleSecondLine: "text of the printing.",
    },
    {
      id: 2,
      bgColor: "bg-white",
      image: webLayersImage,
      imageAlt: "Web Layers",
      happyIcon: happy1Image,
      padding: "py-8 sm:py-12 md:py-16",
      imageClasses:
        "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto ",
      titleBlueText: "Lorem Ipsum",
      titleFirstLine: "is simply dummy",
      titleSecondLine: "text of the printing.",
      adjustImage: "lg:-ml-18",
      adjustContent: "lg:ml-18",
    },
    {
      id: 3,
      bgColor: "bg-white",
      image: vrMan,
      imageAlt: "VR Man",
      happyIcon: happy2Image,
      padding: "py-8 sm:py-12 md:py-16 lg:py-20",
      imageClasses:
        "w-full max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl mx-auto",
      titleBlueText: "Lorem Ipsum",
      titleFirstLine: "is simply dummy",
      titleSecondLine: "text of the printing.",
    },
  ];

  return (
    <div className="w-full max-w-[1536px] mx-auto">
      {/* Title Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br className="hidden sm:block" />
            Lorem Ipsum has been the industry's
          </p>
        </div>
      </section>

      {/* Section Content */}
      {sectionsData.map((section, index) => (
        <ImageContentSection
          key={section.id}
          section={section}
          imagePosition={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
};

export default AboutSection;
