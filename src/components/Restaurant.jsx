import React from 'react';
import  { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import backgroundImage from '../assets/resto.jpg';
import serviceOne from '../assets/kitfo.jpg';
import serviceTwo from '../assets/wine2.webp';
import serviceThree from '../assets/pasta.jpg';
import serviceFour from '../assets/tej.jpg';
import service5 from '../assets/wine.jpg';
import service6 from '../assets/kitfo2.webp';
import service7 from '../assets/fo3.jpg';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const Restaurant = () => {

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
        <title>Bar and Restaurant</title>
        <meta name="description" content="Experience the finest dining and entertainment at our Bar and Restaurant." />
        <meta name="keywords" content="restaurant, bar, dining, entertainment, food, drinks" />
        <meta name="author" content="Your Restaurant Name" />
        <meta property="og:title" content="Bar and Restaurant" />
        <meta property="og:description" content="Experience the finest dining and entertainment at our Bar and Restaurant." />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:url" content="https://www.yourrestaurantwebsite.com" />
        <meta name="twitter:title" content="Bar and Restaurant" />
        <meta name="twitter:description" content="Experience the finest dining and entertainment at our Bar and Restaurant." />
        <meta name="twitter:image" content={backgroundImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="sm:h-96 h-60 flex flex-col items-center justify-center mt-14 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10 text-center text-white w-full max-w-4xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Bar and Restaurant</h1>
        </div>
      </div>

      {/* Main Content */}
      <section id="services" className="py-16 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-xl text-center text-black font-bold mb-4">
                We are proud of the quality of our food, drinks, and service
              </h3>
              <p className="text-black">
                There are more than five bars and restaurants. Our menu is
                designed by a professional executive chef with great attention
                to detail, offering a wide selection and impressive
                presentation. Let us know if you have any dietary requirements
                or allergies so we can prepare a special diet menu tailored to
                your needs.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={serviceOne}
                alt="Service 1"
                className="w-full h-auto object-cover rounded shadow-lg"
              />
            </div>
          </div>

          {/* Images Row */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <img
              src={service6}
              alt="Special Dish"
              className="w-full sm:w-1/2 h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src={serviceFour}
              alt="Traditional Drink"
              className="w-full sm:w-1/2 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-center text-black mb-4">
                RORI FOOD GARDEN
              </h3>
              <p className="text-black px-4 sm:px-20">
                Located on the ground floor, our main restaurant features
                visually attractive and relaxing spaces with water features and
                plants. It’s perfect for lunch or dinner with friends, family,
                or business partners. Enjoy the comfortable and friendly
                atmosphere while savoring our delicious menu.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={serviceTwo}
                alt="Service 2"
                className="w-full sm:w-1/2 h-72 object-cover rounded shadow-lg"
              />
              <img
                src={serviceThree}
                alt="Service 3"
                className="w-full sm:w-1/2 h-72 object-cover rounded shadow-lg"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-center text-black mb-4">
                Meeting and Retreat
              </h3>
              <p className="text-black px-4 sm:px-20">
                Experience luxury in our fully equipped meeting facilities and
                boardrooms, accommodating groups from 10 to 300. From event
                planning to weddings, we handle every detail with care. Enjoy
                guided tours to nearby attractions after your event.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={service5}
                alt="Meeting Facilities"
                className="w-full h-72 object-cover rounded shadow-lg"
              />
            </div>
          </div>

          {/* VIP Lounge */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-center text-black mb-4">
                Moote VIP Lounge
              </h3>
              <p className="text-black px-4 sm:px-12">
                Located on the first floor, our lounge is the perfect spot for
                drinks and good music. Enjoy signature cocktails in a cozy yet
                spacious setting, with excellent service and a spectacular view
                of green Hawassa.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={service7}
                alt="VIP Lounge"
                className="w-full h-auto object-cover rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
