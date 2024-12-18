import React from 'react';
import img from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTiktok, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className=" bg-blue text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={img} alt="Website Logo" className="w-40 h-auto mt-2 mb-4" />
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mt-2 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/restaurant" className="hover:underline">Restaurants</a>
            </li>
            <li>
              <a href="/contacts" className="hover:underline">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mt-2 mb-4">Contact Us </h3>
          <h5 className=" font-bold mb-4">Hawassa, Ethiopia</h5>
          <p className="text-sm flex  items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-golden  mr-2" />
            <span> Adress: In front of SNNPRS President Office</span>
          </p>
          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-golden  mr-2" />
            <span> Phone: +251 462 12 68 80</span>
          </p>
          <p className="text-sm flex items-center pl-8 sm:pl-0">
            <FontAwesomeIcon icon={faEnvelope} className="text-golden   mr-2" />
            <a href="mailto:info@rorihotel.com" className="text-white hover:underline"><span className="text-white">Email:</span>  info@rorihotel.com</a>
          </p>

          <h5 className=" font-bold pl-8 sm:pl-0   mt-4 mb-4">Addis Ababa, Ethiopia</h5>
          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-golden mb-4  mr-2" />
            <span> Adress: Bole medhanialem morning <br/>starmall 3rd floor</span>
          </p>
          <p className="text-sm flex pl-8 sm:pl-0 items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-golden  mr-2" />
            <span> Phone: +251 930 01 0203</span>
          </p>
          <p className="text-sm flex pl-8 sm:pl-0 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-golden  mr-2" />
            <a href="mailto:info@rorihotel.com" className="text-white hover:underline"><span className="text-white">Email:</span>  info@rorihotel.com</a>
          </p>

          <h5 className=" font-bold pl-8 sm:pl-0 mt-3 mb-3">Follow Us on</h5>
               
          <div className="social-icons flex justify-center md:justify-start pl-8 sm:pl-0 mt-4 space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-golden  text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-golden text-2xl" />
            </a>
           
              {/* Facebook and Telegram icons */}
              <a href="https://facebook.com/rorihotel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-golden  text-2xl" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="text-white hover:text-golden text-2xl" />
            </a>
          </div>
        </div>

      </div>

      {/* Horizontal Line and Footer Text */}
      <hr className="border-t border-gray-500 my-6" />
      <p className="text-center text-sm">
        © 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
