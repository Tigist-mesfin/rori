import React from 'react';
import  { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import img1 from '../assets/fo3.jpg';
import img2 from '../assets/Ror11.jpg';
import img3 from '../assets/new.jpg';
import img4 from '../assets/spa.jpg';
import img5 from '../assets/t.jpg';
import img6 from '../assets/tej.jpg';
import img7 from '../assets/swim.jpg';
import img8 from '../assets/twin.jpg';
import img9 from '../assets/kitfo.jpg';
import img10 from '../assets/food1.jpg';
import img11 from '../assets/ima2.png';
import img12 from '../assets/drinking.jpg';
import backgroundImage from '../assets/new.jpg';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles



const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page loads
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Repeat animations on scroll
      offset: 200,    // Trigger 200px before the element is in view
    });
  }, []);



  return (
    <div>

     <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta rel="canonical" href={window.location.href} />
        <title>Gallery - Rori Hotel</title>
        <meta name="description" content="Explore the luxurious gallery of Rori Hotel showcasing rooms, dining, and more in Hawassa, Ethiopia." />
        <meta name="keywords" content="hotel, gallery, luxury, rooms, dining, Hawassa, Ethiopia, Rori Hotel" />
        <meta property="og:title" content="Gallery - Rori Hotel" />
        <meta property="og:description" content="Explore the luxurious gallery of Rori Hotel showcasing rooms, dining, and more in Hawassa, Ethiopia." />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:url" content="https://www.rorihotel.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Rori Hotel" />
        <meta name="twitter:description" content="Explore the luxurious gallery of Rori Hotel showcasing rooms, dining, and more in Hawassa, Ethiopia." />
        <meta name="twitter:image" content={backgroundImage} />
      </Helmet>

      <div
        className="h-96 flex flex-col items-center justify-center mt-14 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 text-left opacity-30" />
        {/* Text Content */}
        <div className="relative z-10 text-white w-full max-w-3xl pl-0">
          <h2 className="text-4xl md:text-6xl mb-4">Experience Luxury at Rori Hotel, Hawassa</h2>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div className="relative group">
            <img
              src={img1}
              alt="Gallery image 1"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            /></div>
            <div className="relative group">
             <img
              src={img4}
              alt="Gallery image 1"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            /></div>
          <div className="relative group">
             <img
              src={img5}
              alt="Gallery image 1"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            /></div>
          
        
          <div className="relative group">
            <img
              src={img2}
              alt="Gallery image 2"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img9}
              alt="Gallery image 3"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="relative group">
            <img
              src={img2}
              alt="Gallery image 4"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img5}
              alt="Gallery image 5"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img6}
              alt="Gallery image 6"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="relative group">
            <img
              src={img7}
              alt="Gallery image 7"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img8}
              alt="Gallery image 8"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img9}
              alt="Gallery image 9"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="relative group">
            <img
              src={img10}
              alt="Gallery image 10"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img11}
              alt="Gallery image 11"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative group">
            <img
              src={img12}
              alt="Gallery image 12"
              className="w-full h-auto sm:h-60 mt-6 sm:mt-20 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
