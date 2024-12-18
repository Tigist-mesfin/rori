import React from "react";
import { Helmet } from "react-helmet-async";
import  { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const Contacts = () => {


  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page loads
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Repeat animations on scroll
      offset: 200,    // Trigger 200px before the element is in view
    });
  }, []);




  return (

    <>
    {/* Helmet for the page head */}
    <Helmet>
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta rel="canonical" href={window.location.href} />
      <title>Contact Us - Rori Hotel</title> {/* Title of the page */}
      <meta name="description" content="Get in touch with Rori Hotel for inquiries, bookings, and more." /> {/* Meta description */}
      <meta name="keywords" content="contact, Rori Hotel, Ethiopia, phone, email, inquiries" /> {/* Meta keywords */}
      <meta name="author" content="Rori Hotel" /> {/* Author meta tag */}
      {/* You can add more meta tags here */}
    </Helmet>

    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-white bg-gradient-to-r from-LLBR via-BR to-DBR  mt-16 mb-8">Contact Us</h2>

      {/* General Contact Information */}
      <div className="bg-gray-100 hover:shadow-BR shadow-lg p-6 rounded-lg  mb-8">
        <h3 className="text-xl font-semibold mb-4">Address</h3>
        <p>Hawassa, Ethiopia</p>
        <p>In front of SNNPRS President Office</p>
        <p className="text-sm flex pl-8 sm:pl-0 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-700  mr-2" />
            <a href="mailto:info@rorihotel.com" className="text-blue-700 hover:underline"><span className="text-black">Email:</span>  info@rorihotel.com</a>
          </p>

          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-700 mr-2" />
            <span> Phone: +251462127200 </span>
          </p>

        
      </div>

     

      {/* Key Contacts */}
      <h3 className="text-xl font-semibold mb-4">Your Contacts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mr. Zelalem Getinet */}
        <div className="bg-gray-100 p-4 hover:shadow-BR shadow-lg rounded-lg ">
          <h4 className="font-semibold mb-2">Mr. Zelalem Getinet</h4>
          <p>General Manager</p>
     <p className="text-sm flex pl-8 sm:pl-0 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-700  mr-2" />
            <a href="mailto:gm@rorihotel.com" className="text-blue-700 hover:underline"><span className="text-black">Email:</span>  gm@rorihotel.com</a>
          </p>
        

          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-700 mr-2" />
            <span> Phone: +251930527510 </span>
          </p>

        </div>

        {/* Mr. Muluken Gedefaw */}
        <div className="bg-gray-100 p-4 hover:shadow-BR shadow-lg rounded-lg ">
          <h4 className="font-semibold mb-2">Mr. Muluken Gedefaw</h4>
          <p>Operations Manager</p>
          
          
          <p className="text-sm flex pl-8 sm:pl-0 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-700  mr-2" />
            <a href="mailto:info@rorihotel.com" className="text-blue-700 hover:underline"><span className="text-black">Email:</span>  info@rorihotel.com</a>
          </p>
          
          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-700 mr-2" />
            <span> Phone: +251930527511 </span>
          </p>

        </div>

        {/* Ms. Yordanos Tegegn */}
        <div className="bg-gray-100 p-4 hover:shadow-BR shadow-lg rounded-lg ">
          <h4 className="font-semibold mb-2">Ms. Yordanos Tegegn</h4>
         <p>Sales and Marketing Manager</p>
         
          <p className="text-sm flex pl-8 sm:pl-0 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-700  mr-2" />
            <a href="mailto:mkt@rorihotel.com" className="text-blue-700 hover:underline"><span className="text-black">Email:</span>  mkt@rorihotel.com</a>
          </p>
          <p className="text-sm flex items-center pl-8 sm:pl-0 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-700 mr-2" />
            <span> Phone: +251930527512 </span>
          </p>
        
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
