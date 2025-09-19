// src/components/Navbar/Navbar.tsx
import React, { useState, useEffect } from "react";
import Dot from "../../assets/dot.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // default active tab

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lock/unlock body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Scroll detection functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About us" },
        { id: "services", label: "Services" },
        { id: "blog", label: "Blog" },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i].label);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active item
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <>
      {/* Blur overlay when menu is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"></div>
      )}

      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-[#1090CB]">LOGO</h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8 lg:gap-10">
                {navItems.map((item) => (
                  <li key={item.href} className="relative">
                    {/* Dot on the TOP-LEFT */}
                    {activeItem === item.label && (
                      <img
                        src={Dot}
                        alt="active-dot"
                        className="h-2 w-2 absolute -top-2 -left-2"
                      />
                    )}
                    <a
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={`font-medium transition-colors duration-300 ${
                        activeItem === item.label
                          ? "text-[#1090CB]"
                          : "text-gray-700 hover:text-[#1090CB]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="bg-[#1090CB] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1090CB] transition-colors duration-300">
                    Contact us
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden relative z-50`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-lg shadow-md">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  {/* Dot on TOP-LEFT */}
                  {activeItem === item.label && (
                    <img
                      src={Dot}
                      alt="active-dot"
                      className="h-2 w-2 absolute -top-2 -left-2"
                    />
                  )}
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                      activeItem === item.label
                        ? "text-[#1090CB]"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;