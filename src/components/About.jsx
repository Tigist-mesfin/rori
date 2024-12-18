import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import img from "../assets/stay.png";
import img1 from "../assets/vision.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import backgroundImage from '../assets/pool.jpg';




const About = () => {

    useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration (in ms)
          once: true, 
      });
  }, []);
  
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page loads
    AOS.init({
      duration: 1000, // Animation duration
      once: true,    // Repeat animations on scroll
      offset: 200,    // Trigger 200px before the element is in view
    });
  }, []);

  return (
<div>
   {/* Add SEO Metadata with Helmet */}
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta rel="canonical" href={window.location.href} />
          <title>About Us - RORI Hotel</title>
        <meta name="description" content="Discover the exceptional amenities, services, and commitment to guest satisfaction at RORI Hotel, located in Hawassa, Ethiopia." />
        <meta name="keywords" content="RORI Hotel, Hawassa, luxury hotel, four-star hotel, Ethiopia" />
        <meta property="og:title" content="About Us - RORI Hotel" />
        <meta property="og:description" content="Learn more about RORI Hotel, offering luxurious accommodation, fine dining, and world-class facilities." />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:type" content="website" />
      </Helmet>
    <div
    className="h-96 flex flex-col items-center justify-center mt-14 relative bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
   
  
      <div className="relative z-10 text-right text-white w-full max-w-4xl pr-4">
          {/* <h1 className="text-3xl md:text-5xl font-bold mb-4">RORI Hotel</h1> */}
      
        </div>
  
  </div>

    <div className="max-w-7xl mx-auto p-6 mt-16">
      <h1 className="text-4xl text-center  font-bold mb-12 font-serif">About Us</h1>
      
      {/* Box for general information */}
      <div data-aos="fade-up" className="border  p-6 rounded-lg    hover:shadow-dark-blue shadow-lg sm:ml-10 sm:mr-10 sm:pl-10 sm:pr-10 mb-28">
        <p className="text-lg mb-4">
          RORI Hotel Hawassa is a five-star hotel located at the heart of the beautiful lakeside city, Hawassa, Ethiopia. The hotel stands within walking distance from Hawassa University and a 25-minute drive from Hawassa National Airport.
        </p>
        <p className="text-lg mb-4">
          Choose from 100 spacious guest rooms, including suites with luxury features and Jacuzzi, deluxe, and standard rooms. Each room offers sound aesthetic interior design and modern amenities. Enjoy a buffet breakfast, complimentary Wi-Fi, and access to our steam room, sauna, gymnasium, and swimming pool to make your stay pleasant.
        </p>
        <p className="text-lg mb-4">
          For dining pleasure, enjoy our delightful selection of hot drinks and snacks in our lobby and fountain lounges. Our traditional, Asian, and all-day dining restaurants provide an exquisite variety of specialty dishes. For a unique and relaxing experience during the night, our well-stocked Bubble Lounge is truly one of a kind.
        </p>
        <p className="text-lg mb-4">
          Looking for venues for meetings or special events? We offer well-conditioned banquet facilities, from executive boardrooms to large meeting halls accommodating up to 300 persons, with flexible refreshment packages.
        </p>
        <p className="text-lg mb-4">
          We welcome you with our distinguished outdoor heated swimming pool, Moroccan bath, massage services, and fully equipped gymnasium. Our staff is dedicated to providing the highest level of service to make your stay memorable. RORI Hotel is environmentally friendly, ensuring a safe and secure environment for our esteemed customers.
        </p>
        <p className="text-lg mb-4">
          Whether for business or pleasure, RORI Hotel provides flawless service and excellent accommodation, making it a pleasure to host our esteemed guests.
        </p>
      </div>

      {/* Flexbox container for Vision and Mission */}
      <div data-aos="fade-up" className="flex flex-col sm:flex-row sm:space-x-8 mb-8">
      {/* Our Vision Box */}
      <div className="flex-1 mb-8 sm:mb-0 border  bg-gradient-to-r  hover:shadow-dark-blue  bg-clip-text text-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4 font-serif">Our Vision</h2>
        <img
          src={img1}
          alt="Our Vision"
          className="w-20 h-auto mb-2 mt-4 mx-auto"
          data-aos="zoom-in" // Add AOS attribute for zoom-in effect
        />
        <p className="text-lg text-gray-600 leading-relaxed">
          Our vision is to provide exceptional service and value for money for our customers. We focus on recruiting, training, developing, and retaining the best staff while ensuring a return on investment for our owners and adhering to the laws of the land and international standards.
        </p>
      </div>

      {/* Stay with Us Box */}
      <div className="flex-1 border  bg-gradient-to-r bg-clip-text text-transparent  hover:shadow-dark-blue   p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800  mb-4 font-serif">Stay with Us</h2>
        <img
          src={img}
          alt="Stay with Us"
          className="w-20 h-auto mb-2 mt-4 mx-auto"
          data-aos="zoom-in" // Add AOS attribute for zoom-in effect
        />
        <p className="text-lg text-gray-600 leading-relaxed">
          Our 100 luxurious guest rooms include Presidential rooms, Family suites, Deluxe Rooms, Twin and Standard rooms, all featuring high-speed Wi-Fi internet access, satellite TV, and amenities that present the perfect balance of comfort and convenience.
        </p>
      </div>
    </div>
    <hr className="border-t border-black mt-12 sm:mt-28 mb-4 my-6" />
    <div data-aos="fade-up" className="bg-white p-6  max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-black mb-4 ">Hotel Policies</h2>
      <p className="text-1xl  text-black">
        <strong>Check-in Time:</strong> 12:00 - 12:30<br />
        <strong>Check-out Time:</strong> 11:30 - 12:00<br />
        <strong>Cancellation/Prepayment:</strong> Cancellation and prepayment policies vary depending on the type of accommodation. Please enter your stay dates to check specific conditions.<br />
        <strong>Children and Beds:</strong> Children of any age are welcome.<br />
        <strong>Pets:</strong> Pets are not allowed.<br />
        <strong>Payment Methods:</strong> Rori Hotel accepts various card payments and reserves the right to temporarily hold an amount prior to arrival.
      </p>
    </div>
  
    </div>
    </div>
  );
};

export default About;
