import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import room1 from '../assets/bed2.jpg'; // Import your room images
import room2 from '../assets/bed3.jpg';
import room3 from '../assets/bed4.jpg';
import room4 from '../assets/Ror22.jpg';
import room5 from '../assets/Ror33.jpeg'; // Import an additional room image
import room6 from '../assets/twin.jpg';
import backgroundImage from '../assets/t2.png';


const Rooms = () => {
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);
  const rooms = [
    { 
        id: 1, 
        title: 'Presidential Suit', 
        description: (
          <>
            The suite features a Jacuzzi in the bathroom, includes a mini bar, and offers office space.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 1-2 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Single bed<br />
            <a 
        href="/about" 
        className="mt-2 bg-blue hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
      >
        View Detail
      </a>
          </>
        ), 
        image: room1 
      },
      { 
        id: 2, 
        title: 'Suit', 
        description: (
          <>
            Located on the top floor with 125 m² of space, our luxurious suite features a Jacuzzi, mini bar, office, and living area. 
            Enjoy breathtaking views of Hawassa through wide windows that fill the room with natural light.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 1-2 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Single bed<br />
            <button 
              onClick={() => alert('Booking functionality coming soon!')} 
              className="mt-2 bg-blue  hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
            >
              View Detail
            </button>
          </>
        ), 
        image: room2 
      },
      { 
        id: 3, 
        title: 'Suit Room', 
        description: (
          <>
            Our suite rooms offer breathtaking panoramic garden views, a spacious marble bathroom with Jacuzzi, mini bar, office, and a well-furnished living area.
             With 62 m² of space, they are perfect for comfort and small gatherings.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 1-2 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Single bed<br />
            <button 
              onClick={() => alert('Booking functionality coming soon!')} 
              className="mt-2 bg-blue  hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
            >
             View Detail
            </button>
          </>
        ), 
        image: room3 
      },
      { 
        id: 4, 
        title: 'Deluxe Room', 
        description: (
          <>
            
             Experience unmatched comfort in our deluxe rooms, perfect for business travelers, offering 56 m² of space with modern amenities. 
             they ensure a peaceful and restful stay.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 1-2 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Single bed<br />
            <button 
              onClick={() => alert('Booking functionality coming soon!')} 
              className="mt-2 bg-blue  hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
            >
             View Detail
            </button>
          </>
        ), 
        image: room4 
      },
      { 
        id: 5, 
        title: 'Twin Room', 
        description: (
          <>
           Enjoy relaxed circulation and a spacious layout in our 50 m² twin rooms, complete with a private balcony and panoramic stadium views.
            Ideal for comfort and productivity, these rooms are perfect for any stay.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 2-4 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Double bed<br />
            <button 
              onClick={() => alert('Booking functionality coming soon!')} 
              className="mt-2 bg-blue  hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
            >
             View Detail
            </button>
          </>
        ), 
        image: room6
      },
      { 
        id: 6, 
        title: 'Standard Room', 
        description: (
          <>
            Our 32 m² standard rooms, inspired by Southern nations, feature stunning art and artifacts, private bathrooms, and balconies with spectacular Hawassa views. 
            Experience relaxed five-star accommodation at its finest.<br />
            <FontAwesomeIcon icon={faCircleCheck} /> 1-2 persons<br />
            <FontAwesomeIcon icon={faCircleCheck} /> Single bed<br />
            <button 
              onClick={() => alert('Booking functionality coming soon!')} 
              className="mt-2 bg-blue  hover:bg-dark-blue text-white font-bold py-2 ml-40 px-4 rounded"
            >
               View Detail
            </button>
          </>
        ), 
        image: room5 
      },
  ];

  return (
  
    <div>

  {/* Helmet for setting metadata */}
  <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta rel="canonical" href={window.location.href} />
        <title>Our Rooms | Luxurious Comfort</title>
        <meta name="description" content="Explore our luxurious rooms and suites, offering comfort, elegance, and stunning views. Book now for an unforgettable stay." />
      </Helmet>

      {/* Hero Section */}
      <div
        className="h-96 flex flex-col items-center justify-center mt-14 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0  opacity-30" />
        {/* Text Content */}
        <div className="relative z-10 text-right text-white w-full max-w-4xl pr-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Rooms</h1>
          <p className=" sm:text-lg md:text-xl ">Experience luxury and comfort like never before.</p>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="py-10">
  <h2 className="text-4xl font-bold text-center mt-14 mb-14">LUXURIOUS COMFORT</h2>
  <div className="max-w-4xl mx-auto">
    {rooms.map((room) => (
      <div 
        key={room.id} 
        className="flex flex-col md:flex-row items-center mb-16 bg-white hover:shadow-golden rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-1 p-6 md:p-28">
          <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
          <p className="text-gray-700">{room.description}</p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={room.image}
            alt={room.title}
            className="w-full md:w-96 h-60 sm:pr-8 object-cover "
          />
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Rooms;