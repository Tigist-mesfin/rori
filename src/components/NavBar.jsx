import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../assets/RHlogo.jpeg";
import img2 from "../assets/RHlogo2.jpeg";
import img3 from "../assets/ima2.png";
import img4 from "../assets/bed2.jpg";
import img5 from "../assets/Ro.png";
import img6 from "../assets/wine.jpg";
import img7 from "../assets/contact-us.jpg";
import defaultImage from "../assets/Ror1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook,} from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu toggle state
  const [hoveredImage, setHoveredImage] = useState(defaultImage); // Hovered image state
  const menuRef = useRef(null); // Reference for the menu
  const toggleButtonRef = useRef(null); // Reference for the toggle button

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) && // Clicks outside the menu
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target) // Exclude toggle button clicks
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue text-white fixed top-0 left-0 w-full z-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex flex-row">
            <div className="text-xl font-bold">
              <a href="/">
                <img src={img} alt="Website Logo" className="w-12 h-16 mt-1" />
              </a>
            </div>
            <div className="text-xl font-bold">
              <a href="/">
                <img src={img2} alt="Website Logo 2" className="w-32 h-12 mt-3" />
              </a>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            ref={toggleButtonRef}
            id="menu-toggle"
            className="text-gray-300 hover:text-white focus:outline-none ml-4"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`flex flex-col sm:flex-row justify-between items-center absolute top-20 left-0 w-full bg-blue text-white px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
        }`}
      >
        {/* Dynamic Image Display */}
        <div className="w-full flex justify-center my-4">
          <img
            src={hoveredImage} // Dynamic image source
            alt="Dynamic"
            className="hidden sm:block w-72 h-auto rounded-lg object-cover transition-all duration-300"
          />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-52">
          <div className="flex flex-col  items-center">
            {[
              { to: "/", label: "Home", img: img3 },
              { to: "/about", label: "About Us", img: img5 },
              { to: "/rooms", label: "Rooms", img: img4 },
              { to: "/restaurant", label: "Restaurant", img: img6 },
              { to: "/contacts", label: "Contact Us", img: img7 },
              { to: "/gallery", label: "Gallery", img: defaultImage },
            ].map(({ to, label, img }) => (
              <Link
                to={to}
                key={label}
                className="block hover:bg-dark-blue py-2 px-4 rounded whitespace-nowrap"
                onMouseEnter={() => setHoveredImage(img)} // Change image on hover
                onMouseLeave={() => setHoveredImage(defaultImage)} // Reset image on mouse leave
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
            <div className="social-icons flex justify-center md:justify-start sm:pr-28  mt-4 space-x-4">
                      <a href="https://www.instagram.com/rori_hotel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-golden  text-2xl" />
                      </a>
                      <a href="https://www.linkedin.com/company/rorihotelhawassa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-golden text-2xl" />
                      </a>
                     
                        {/* Facebook and Telegram icons */}
                        <a href="https://facebook.com/rorihotel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-golden  text-2xl" />
                      </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
