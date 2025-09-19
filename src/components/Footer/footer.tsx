import React from "react";

// Import your social icons from assets
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

const Footer: React.FC = () => {
  const aboutLinks = [
    { label: "Lorem", href: "#lorem" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Careers", href: "#careers" },
    { label: "Contact us", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#", icon: FacebookIcon },
    { label: "Instagram", href: "#", icon: InstagramIcon },
    { label: "Twitter", href: "#", icon: TwitterIcon },
    { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Main content */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
          {/* Logo Section */}
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00329B]">
              LOGO
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto sm:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-500 text-sm sm:text-base">@Lorem</p>
          </div>

          {/* About Us Section */}
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              About us
            </h4>
            <ul className="space-y-0.5">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#1090CB] transition-colors duration-200 text-sm sm:text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              Contact us
            </h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto sm:mx-0">
              Lorem Ipsum is simply dummy text <br />
              of the printing and typesetting <br />
              industry.
            </p>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              +908 89097 890
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center sm:justify-end space-x-3 items-end">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright with full-width underline */}
      <div className="border-t border-gray-200 mt-4 sm:mt-6 pt-2 sm:pt-3 w-full">
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          Copyright © 2021 Lorem All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
